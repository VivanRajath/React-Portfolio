import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [suggestionsOpen, setSuggestionsOpen] = useState(true);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi 👋 I'm Vivan's AI assistant! Ask me anything about his resume, projects, skills, or experience!",
            type: "text"
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Backend URL
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://VivanRajath-Chatbot.hf.space";

    // Listen for custom event to open chatbot
    useEffect(() => {
        const handleOpenChatbot = () => {
            console.log('Opening chatbot via custom event...');
            setIsOpen(true);
        };
        
        window.addEventListener('openChatbot', handleOpenChatbot);
        return () => window.removeEventListener('openChatbot', handleOpenChatbot);
    }, []);

    // Suggestion buttons
    const suggestions = [
        "📋 Show all projects",
        "💻 What are his skills?",
        "🎓 Education background",
        "💼 Work experience",
        "🏆 Achievements & Awards",
        "📄 Publications",
        "🚀 Tell me about hackathons",
        "Contact"
    ];

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const toggleSuggestions = () => {
        setSuggestionsOpen(!suggestionsOpen);
    };

    const handleSuggestionClick = (suggestion) => {
        // Remove emoji and send the suggestion
        const cleanSuggestion = suggestion.replace(/^[\u{1F300}-\u{1F9FF}]\s*/u, "");
        sendMessage(cleanSuggestion);
        // Auto-collapse suggestions after clicking
        setSuggestionsOpen(false);
    };

    const handleProjectClick = (projectName) => {
        sendMessage(`Tell me about ${projectName} project`);
        setSuggestionsOpen(false);
    };

    const parseMessageContent = (text) => {
        // Check if message contains project list
        if (text.includes("Projects (") && text.includes("total):")) {
            const lines = text.split('\n');
            const projects = [];
            let isProjectList = false;

            lines.forEach(line => {
                if (line.match(/^\d+\.\s/)) {
                    const projectName = line.replace(/^\d+\.\s/, '').trim();
                    projects.push(projectName);
                    isProjectList = true;
                }
            });

            if (isProjectList) {
                return { type: "project_list", projects, originalText: text };
            }
        }

        // Check if message contains links
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const links = text.match(linkRegex);

        if (links && links.length > 0) {
            return { type: "text_with_links", text, links };
        }

        return { type: "text", text };
    };

    const renderMessage = (msg, index) => {
        if (msg.sender === "user") {
            return (
                <div key={index} className="chatbot-message user">
                    <div className="chatbot-bubble user-bubble">{msg.text}</div>
                </div>
            );
        }

        const parsedContent = parseMessageContent(msg.text);

        if (parsedContent.type === "project_list") {
            return (
                <div key={index} className="chatbot-message bot">
                    <div className="chatbot-bubble bot-bubble">
                        <div className="project-list-header">
                            📋 <strong>Vivan's Projects</strong>
                        </div>
                        <div className="project-buttons">
                            {parsedContent.projects.map((project, i) => (
                                <button
                                    key={i}
                                    className="project-button"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    {project}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (parsedContent.type === "text_with_links") {
            return (
                <div key={index} className="chatbot-message bot">
                    <div className="chatbot-bubble bot-bubble">
                        <div className="message-with-links">
                            {renderTextWithLinks(parsedContent.text, parsedContent.links)}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div key={index} className="chatbot-message bot">
                <div className="chatbot-bubble bot-bubble">
                    <div dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }} />
                </div>
            </div>
        );
    };

    const renderTextWithLinks = (text, links) => {
        let parts = [text];

        links.forEach(link => {
            parts = parts.flatMap(part => {
                if (typeof part === 'string' && part.includes(link)) {
                    const splitParts = part.split(link);
                    const result = [];
                    for (let i = 0; i < splitParts.length; i++) {
                        if (i > 0) {
                            // Determine link type and create appropriate button
                            let buttonText = "🔗 Open Link";
                            let buttonClass = "link-button";

                            if (link.includes('github.com')) {
                                buttonText = "💻 View Code";
                                buttonClass = "link-button github";
                            } else if (link.includes('notion.so')) {
                                buttonText = "📖 Read Blog";
                                buttonClass = "link-button notion";
                            } else if (link.includes('t.me')) {
                                buttonText = "🤖 Try Bot";
                                buttonClass = "link-button telegram";
                            } else if (link.includes('colab')) {
                                buttonText = "🔬 Open Notebook";
                                buttonClass = "link-button colab";
                            } else if (link.includes('render.com')) {
                                buttonText = "🌐 Live Demo";
                                buttonClass = "link-button demo";
                            } else if (link.includes('drive.google.com')) {
                                buttonText = "📁 View Files";
                                buttonClass = "link-button drive";
                            } else if (link.includes('linkedin.com')) {
                                buttonText = "💼 LinkedIn Post";
                                buttonClass = "link-button linkedin";
                            }

                            result.push(
                                <button
                                    key={link}
                                    className={buttonClass}
                                    onClick={() => window.open(link, '_blank')}
                                >
                                    {buttonText}
                                </button>
                            );
                        }
                        if (splitParts[i]) {
                            result.push(splitParts[i]);
                        }
                    }
                    return result;
                }
                return [part];
            });
        });

        return parts.map((part, index) =>
            typeof part === 'string' ? <span key={index}>{part}</span> : part
        );
    };

    const formatBotMessage = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br/>');
    };

    const sendMessage = async (messageText = null) => {
        const message = messageText || input.trim();
        if (!message) return;

        const newMsg = { sender: "user", text: message };
        setMessages((prev) => [...prev, newMsg]);
        setInput("");
        setLoading(true);

        // Auto-collapse suggestions when user sends a message
        setSuggestionsOpen(false);

        try {
            const response = await fetch(`${backendUrl}/ask`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: message })
            });

            const result = await response.json();
            const botText = result?.answer || "Sorry, I couldn't process that.";
            setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
        } catch (err) {
            console.error("Error calling FastAPI backend:", err);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "⚠️ Error connecting to AI backend. Please try again!" }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style jsx>{`
                .suggestions-toggle-button {
                    width: 100%;
                    padding: 12px 16px;
                    color : white;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 14px;
                    font-weight: 500;
                    transition: background-color 0.2s ease;
                }

                .suggestions-arrow {
                    transition: transform 0.3s ease;
                    font-size: 12px;
                    color : white;
                }

                .suggestions-arrow.open {
                    transform: rotate(180deg);
                }

                .suggestions-content {
                    transition: all 0.3s ease;
                    max-height: ${suggestionsOpen ? '300px' : '0px'};
                    opacity: ${suggestionsOpen ? '1' : '0'};
                    overflow: hidden;
                }
            `}</style>

            <div>
                {/* Floating Chat Icon */}
                <div className="chatbot-icon" onClick={toggleChat}>
                    <div className="chatbot-icon-content">
                        <span className="chatbot-icon-emoji">🤖</span>
                        <span className="chatbot-icon-text">Chat with Vivan's AI</span>
                    </div>
                    {!isOpen && (
                        <div className="notification-badge">💬</div>
                    )}
                </div>

                {/* Chat Window */}
                {isOpen && (
                    <div className="chatbot-container">
                        <div className="chatbot-header">
                            <div className="header-content">
                                <span className="header-title">🤖 Vivan's AI Assistant</span>
                                <span className="header-status">Online</span>
                            </div>
                            <button className="close-btn" onClick={toggleChat}>✖</button>
                        </div>

                        <div className="chatbot-messages">
                            {messages.map((msg, i) => renderMessage(msg, i))}
                            {loading && (
                                <div className="chatbot-message bot">
                                    <div className="chatbot-bubble bot-bubble">
                                        <div className="typing-indicator">
                                            <span>🤖 Thinking</span>
                                            <div className="typing-dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions with Toggle */}
                        <div className="chatbot-suggestions">
                            <button 
                                className="suggestions-toggle-button"
                                onClick={toggleSuggestions}
                            >
                                <span>💡 Quick questions</span>
                                <span className={`suggestions-arrow ${suggestionsOpen ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className="suggestions-content">
                                <div className="suggestions-grid">
                                    {suggestions.map((suggestion, i) => (
                                        <button
                                            key={i}
                                            className="suggestion-button"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Ask me about Vivan's projects, skills, experience..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                disabled={loading}
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={loading || !input.trim()}
                                className="send-button"
                            >
                                {loading ? "⏳" : "Send"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chatbot;