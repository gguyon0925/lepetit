(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/AuthGuard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthGuard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthGuard({ children }) {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (!loading && !user) {
                // Store the attempted URL to redirect back after login
                const returnUrl = encodeURIComponent(pathname);
                router.push(`/login?returnUrl=${returnUrl}`);
            }
        }
    }["AuthGuard.useEffect"], [
        user,
        loading,
        router,
        pathname
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthGuard.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-gray-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthGuard.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthGuard.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AuthGuard.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null; // Will redirect in useEffect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(AuthGuard, "+V/1yikrC2yNn6BpNR6HilodE6g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthGuard;
var _c;
__turbopack_context__.k.register(_c, "AuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AIChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AIChat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AIChat({ sessionId, currentCode, challengeInfo, messages: externalMessages, draftMessage: externalDraft, onCodeUpdate, onMessagesChange, onDraftChange }) {
    _s();
    const defaultMessages = [
        {
            id: "0",
            role: "assistant",
            content: "Hi! I'm your AI coding assistant. I can help you with your challenge, but be careful - I might occasionally make mistakes that you'll need to catch! 😊",
            timestamp: new Date()
        }
    ];
    const [internalMessages, setInternalMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultMessages);
    const [internalInput, setInternalInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Use external state if provided, otherwise use internal state
    const messages = externalMessages || internalMessages;
    const input = externalDraft !== undefined ? externalDraft : internalInput;
    const setInput = onDraftChange || setInternalInput;
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiInteractionCount, setAiInteractionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [codeUpdated, setCodeUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChat.useEffect": ()=>{
            scrollToBottom();
        }
    }["AIChat.useEffect"], [
        messages
    ]);
    const sendMessage = async ()=>{
        if (!input.trim() || loading) return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date()
        };
        if (onMessagesChange) {
            onMessagesChange([
                ...messages,
                userMessage
            ]);
        } else {
            setInternalMessages((prev)=>[
                    ...prev,
                    userMessage
                ]);
        }
        setInput("");
        setLoading(true);
        try {
            const token = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser?.getIdToken();
            if (!token) throw new Error("Not authenticated");
            console.log("Sending message with code context:", {
                messageLength: input.length,
                codeLength: currentCode.length,
                lineCount: currentCode.split("\n").length
            });
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    sessionId,
                    message: input,
                    currentCode,
                    challengeInfo,
                    aiInteractionCount
                })
            });
            if (!response.ok) throw new Error("Failed to get AI response");
            const data = await response.json();
            const aiMessage = {
                id: Date.now().toString(),
                role: "assistant",
                content: data.response || data.suggestedCode || "I encountered an error. Please try again.",
                hints: data.hints,
                timestamp: new Date()
            };
            if (onMessagesChange) {
                onMessagesChange([
                    ...messages,
                    userMessage,
                    aiMessage
                ]);
            } else {
                setInternalMessages((prev)=>[
                        ...prev,
                        userMessage,
                        aiMessage
                    ]);
            }
            setAiInteractionCount((prev)=>prev + 1);
            // If there's suggested code, update it
            if (data.suggestedCode && onCodeUpdate) {
                setCodeUpdated(true);
                onCodeUpdate(data.suggestedCode, data.modifiedLines);
                setTimeout(()=>setCodeUpdated(false), 3000);
                // Add a system message about the code update
                let updateContent = "";
                if (data.patchApplied === true) {
                    updateContent = "✅ I've applied the code changes using a diff patch. The modified lines are highlighted in blue.";
                } else if (data.patchApplied === false && data.patchErrors?.length > 0) {
                    updateContent = `⚠️ I couldn't apply some patches automatically:\n${data.patchErrors.join("\n")}\n\nI've provided the full updated code instead.`;
                } else {
                    updateContent = codeUpdated ? "✅ I've updated your code in the editor again. The changes are highlighted with blue background." : "✅ I've updated your code in the editor. The changes are highlighted with blue background.";
                }
                const updateMessage = {
                    id: (Date.now() + 2).toString(),
                    role: "assistant",
                    content: updateContent,
                    timestamp: new Date()
                };
                if (onMessagesChange) {
                    onMessagesChange([
                        ...messages,
                        userMessage,
                        aiMessage,
                        updateMessage
                    ]);
                } else {
                    setInternalMessages((prev)=>[
                            ...prev,
                            updateMessage
                        ]);
                }
            } else if (data.patchErrors?.length > 0 && !data.suggestedCode) {
                // Patch failed and no fallback code - show error with helpful message
                console.log("Patch failed completely:", data.patchErrors);
                const errorMessage = {
                    id: (Date.now() + 3).toString(),
                    role: "assistant",
                    content: `❌ I couldn't apply the code changes automatically. ${data.patchErrors[0]}\n\nPlease try rephrasing your request or being more specific about what you want to change.`,
                    timestamp: new Date()
                };
                if (onMessagesChange) {
                    onMessagesChange([
                        ...messages,
                        userMessage,
                        aiMessage,
                        errorMessage
                    ]);
                } else {
                    setInternalMessages((prev)=>[
                            ...prev,
                            errorMessage
                        ]);
                }
            }
        } catch (error) {
            console.error("Error calling AI:", error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Sorry, I encountered an error. Please try again.",
                timestamp: new Date()
            };
            if (onMessagesChange) {
                onMessagesChange([
                    ...messages,
                    errorMessage
                ]);
            } else {
                setInternalMessages((prev)=>[
                        ...prev,
                        errorMessage
                    ]);
            }
        } finally{
            setLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: [
                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: message.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIChat.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIChat.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIChat.tsx",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIChat.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AIChat.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 py-2 rounded-lg ${message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm whitespace-pre-wrap",
                                                children: message.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIChat.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            message.hints && message.hints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 space-y-2",
                                                children: message.hints.map((hint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-yellow-900/50 rounded flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AIChat.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-yellow-200",
                                                                children: hint
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AIChat.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/AIChat.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIChat.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AIChat.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AIChat.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        }, message.id, false, {
                            fileName: "[project]/src/components/AIChat.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AIChat.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIChat.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 bg-gray-700 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIChat.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.1s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIChat.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.2s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIChat.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AIChat.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIChat.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AIChat.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/AIChat.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AIChat.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-700 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyPress: handleKeyPress,
                            placeholder: "Ask for help...",
                            className: "flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500",
                            rows: 2,
                            disabled: loading
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChat.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendMessage,
                            disabled: loading || !input.trim(),
                            className: "px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                            "aria-label": "Send message",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIChat.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AIChat.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AIChat.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AIChat.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AIChat.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s(AIChat, "dJ3PzT//U7yrWSjVWjSEgQafmcw=");
_c = AIChat;
var _c;
__turbopack_context__.k.register(_c, "AIChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CodePreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CodePreview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CodePreview({ code }) {
    _s();
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [consoleMessages, setConsoleMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isConsoleOpen, setIsConsoleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const consoleEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll console to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodePreview.useEffect": ()=>{
            consoleEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["CodePreview.useEffect"], [
        consoleMessages
    ]);
    const processCode = (userCode)=>{
        let processedCode = userCode;
        // Remove all import statements (including multi-line imports)
        processedCode = processedCode.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, "");
        processedCode = processedCode.replace(/import\s+['"][^'"]+['"];?\s*/g, "");
        // Remove all export statements
        // Handle: export default function/class/const ComponentName
        processedCode = processedCode.replace(/export\s+default\s+(function|class|const|let|var)\s+/g, "$1 ");
        // Handle: export function/class/const
        processedCode = processedCode.replace(/export\s+(function|class|const|let|var)\s+/g, "$1 ");
        // Handle: export default ComponentName; or export default ComponentName (at end of file)
        processedCode = processedCode.replace(/export\s+default\s+(\w+)\s*;?\s*$/gm, "");
        // Handle: export { ... }
        processedCode = processedCode.replace(/export\s*\{[^}]*\}\s*;?\s*/g, "");
        // Wrap any existing root.render calls in ErrorBoundary
        processedCode = processedCode.replace(/root\.render\s*\(\s*<([^>]+)>\s*\)/g, "root.render(<ErrorBoundary><$1></ErrorBoundary>)");
        // Also handle ReactDOM.render calls
        processedCode = processedCode.replace(/ReactDOM\.render\s*\(\s*<([^,]+)>,\s*([^)]+)\)/g, "ReactDOM.render(<ErrorBoundary><$1></ErrorBoundary>, $2)");
        // Check if the code already includes a render call
        const hasRenderCall = processedCode.includes("root.render") || processedCode.includes("ReactDOM.render");
        // Only add auto-render if there's no existing render call
        if (!hasRenderCall) {
            // Find the main component name (handle function, class, and arrow function components)
            let mainComponent = null;
            // Try function components
            const functionMatches = processedCode.match(/function\s+([A-Z]\w*)\s*\(/g);
            if (functionMatches) {
                mainComponent = functionMatches[functionMatches.length - 1].match(/function\s+([A-Z]\w*)/)?.[1];
            }
            // Try class components
            if (!mainComponent) {
                const classMatches = processedCode.match(/class\s+([A-Z]\w*)\s+extends\s+(?:React\.)?Component/g);
                if (classMatches) {
                    mainComponent = classMatches[classMatches.length - 1].match(/class\s+([A-Z]\w*)/)?.[1];
                }
            }
            // Try arrow function components (const ComponentName = () => {})
            if (!mainComponent) {
                const arrowMatches = processedCode.match(/const\s+([A-Z]\w*)\s*=\s*\([^)]*\)\s*=>/g);
                if (arrowMatches) {
                    mainComponent = arrowMatches[arrowMatches.length - 1].match(/const\s+([A-Z]\w*)/)?.[1];
                }
            }
            // Add rendering logic at the end if a component was found
            if (mainComponent) {
                processedCode += `
          
// Auto-render the component wrapped in ErrorBoundary
if (typeof ${mainComponent} !== 'undefined' && !window.hasRendered) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ErrorBoundary>
      <${mainComponent} />
    </ErrorBoundary>
  );
  window.hasRendered = true;
}`;
            }
        }
        return processedCode;
    };
    const createPreviewContent = (userCode)=>{
        const processedCode = processCode(userCode);
        // Log for debugging
        console.log("[CodePreview] Original code length:", userCode.length);
        console.log("[CodePreview] Processed code length:", processedCode.length);
        console.log("[CodePreview] Has export statement:", userCode.includes("export"));
        console.log("[CodePreview] Has import statement:", userCode.includes("import"));
        // HTML template with React loaded from CDN
        return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <style>
            body {
              margin: 0;
              padding: 16px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              background: #1e1e1e;
              color: #fff;
            }
            .error {
              background: #991b1b;
              color: white;
              padding: 20px 24px;
              border-radius: 12px;
              margin: 20px auto;
              max-width: 800px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              font-size: 14px;
              line-height: 1.6;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .error strong {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 18px;
              margin-bottom: 12px;
              font-weight: 600;
            }
            .error strong::before {
              content: '❌';
              font-size: 20px;
            }
            .error small {
              font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
              font-size: 12px;
              display: block;
              margin-top: 12px;
              padding: 12px 16px;
              background: rgba(0, 0, 0, 0.25);
              border-radius: 6px;
              overflow-x: auto;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .error .hint-box {
              background: rgba(255, 255, 255, 0.15);
              padding: 12px 16px;
              border-radius: 8px;
              margin: 12px 0;
              font-size: 13px;
              border-left: 3px solid #fbbf24;
            }
            .error .hint-box strong {
              font-size: 14px;
              margin-bottom: 4px;
            }
            .warning {
              background: #f59e0b;
              color: white;
              padding: 12px 16px;
              border-radius: 6px;
              margin: 8px auto;
              max-width: 800px;
              font-size: 13px;
            }
            /* Default styles for common UI elements */
            button {
              background: #4f46e5;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
              transition: background 0.2s;
            }
            button:hover {
              background: #4338ca;
            }
            button:disabled {
              background: #6b7280;
              cursor: not-allowed;
            }
            input, textarea, select {
              background: #374151;
              border: 1px solid #4b5563;
              color: white;
              padding: 8px 12px;
              border-radius: 4px;
              font-size: 14px;
              width: 100%;
              box-sizing: border-box;
            }
            input:focus, textarea:focus, select:focus {
              outline: none;
              border-color: #4f46e5;
            }
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            li {
              background: #374151;
              padding: 12px;
              margin-bottom: 8px;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .container {
              max-width: 1200px;
              margin: 0 auto;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #f3f4f6;
              margin-top: 0;
            }
            .card {
              background: #374151;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 16px;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            // Make React available globally for the user code
            const { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, Fragment } = React;
            
            // Override console methods to capture output
            const originalLog = console.log.bind(console);
            const originalError = console.error.bind(console);
            const originalWarn = console.warn.bind(console);
            
            window.consoleOutput = [];
            
            // Prevent recursion by checking if we're already in a console call
            let inConsoleCall = false;
            
            console.log = (...args) => {
              if (!inConsoleCall) {
                inConsoleCall = true;
                window.consoleOutput.push({ type: 'log', args, timestamp: Date.now() });
                originalLog(...args);
                
                // Send console output to parent window
                if (window.parent !== window) {
                  window.parent.postMessage({
                    type: 'console-output',
                    messages: window.consoleOutput
                  }, '*');
                }
                
                inConsoleCall = false;
              }
            };
            
            console.error = (...args) => {
              if (!inConsoleCall) {
                inConsoleCall = true;
                window.consoleOutput.push({ type: 'error', args, timestamp: Date.now() });
                originalError(...args);
                
                // Send console output to parent window
                if (window.parent !== window) {
                  window.parent.postMessage({
                    type: 'console-output',
                    messages: window.consoleOutput
                  }, '*');
                }
                
                inConsoleCall = false;
              }
            };
            
            console.warn = (...args) => {
              if (!inConsoleCall) {
                inConsoleCall = true;
                window.consoleOutput.push({ type: 'warn', args, timestamp: Date.now() });
                originalWarn(...args);
                
                // Send console output to parent window
                if (window.parent !== window) {
                  window.parent.postMessage({
                    type: 'console-output',
                    messages: window.consoleOutput
                  }, '*');
                }
                
                inConsoleCall = false;
              }
            };
            
            // Listen for clear console messages
            window.addEventListener('message', (event) => {
              if (event.data.type === 'clear-console') {
                window.consoleOutput = [];
              }
            });

            // Create a React Error Boundary component
            class ErrorBoundary extends React.Component {
              constructor(props) {
                super(props);
                this.state = { hasError: false, error: null, errorInfo: null };
              }
              
              static getDerivedStateFromError(error) {
                return { hasError: true };
              }
              
              componentDidCatch(error, errorInfo) {
                console.error('React Error Boundary caught:', error, errorInfo);
                this.setState({
                  error: error,
                  errorInfo: errorInfo
                });
              }
              
              render() {
                if (this.state.hasError) {
                  const errorMessage = this.state.error?.toString() || 'Unknown error';
                  const stackTrace = this.state.errorInfo?.componentStack || '';
                  
                  // Check for common React errors
                  const isMapError = errorMessage.includes('.map is not a function');
                  const isUndefinedError = errorMessage.includes("Cannot read properties of undefined");
                  const isNullError = errorMessage.includes("Cannot read properties of null");
                  const isNotIterableError = errorMessage.includes("is not iterable");
                  const isInvalidHookCall = errorMessage.includes("Invalid hook call");
                  const isObjectNotValidReactChild = errorMessage.includes("Objects are not valid as a React child");
                  
                  let helpfulMessage = '';
                  if (isMapError) {
                    helpfulMessage = 'This error often occurs when trying to use .map() on data that is not an array. Check that your API response is being parsed correctly and that you have proper default values. For example: projects || [] instead of just projects.';
                  } else if (isUndefinedError || isNullError) {
                    helpfulMessage = 'This error occurs when trying to access properties on undefined or null values. Make sure to check if data exists before accessing its properties. Use optional chaining (?.) or default values.';
                  } else if (isNotIterableError) {
                    helpfulMessage = 'This error occurs when trying to destructure or spread a non-iterable value. Make sure the value is an array or has an iterator.';
                  } else if (isInvalidHookCall) {
                    helpfulMessage = 'Hooks can only be called inside function components and must be called at the top level, not inside loops, conditions, or nested functions.';
                  } else if (isObjectNotValidReactChild) {
                    helpfulMessage = 'You are trying to render an object directly. React cannot render objects - you need to render specific properties or convert the object to a string (e.g., JSON.stringify).';
                  }
                  
                  return (
                    <div className="error">
                      <strong>React Component Error:</strong>
                      <br/><br/>
                      <div style={{ marginBottom: '12px' }}>{errorMessage}</div>
                      
                      {helpfulMessage && (
                        <div className="hint-box">
                          <strong>💡 Hint:</strong> {helpfulMessage}
                        </div>
                      )}
                      
                      {stackTrace && (
                        <small style={{ whiteSpace: 'pre-wrap', opacity: 0.8 }}>
                          Component Stack:
                          {stackTrace}
                        </small>
                      )}
                    </div>
                  );
                }
                
                return this.props.children;
              }
            }
            
            // Global error handlers
            window.addEventListener('error', (event) => {
              event.preventDefault();
              
              // Check if this is an unimplemented TODO error
              const isTodoError = event.message.includes('TODO') || 
                                  event.message.includes('not implemented') ||
                                  event.filename.includes('Babel');
              
              if (isTodoError) {
                document.getElementById('root').innerHTML = \`
                  <div class="warning">
                    <strong>⚠️ Implementation Needed:</strong>
                    <br/>
                    This component has TODO items that need to be implemented.
                    <br/><br/>
                    Check the code comments for guidance on what needs to be built.
                  </div>
                \`;
              } else {
                // Log to console for debugging
                console.error('Global error:', event.message);
                
                document.getElementById('root').innerHTML = \`
                  <div class="error">
                    <strong>Runtime Error:</strong> \${event.message}
                    <br/><br/>
                    <small>Line \${event.lineno}, Column \${event.colno}</small>
                    <br/><br/>
                    <small style="opacity: 0.7;">\${event.filename}</small>
                  </div>
                \`;
              }
              
              return true;
            });
            
            window.addEventListener('unhandledrejection', (event) => {
              event.preventDefault();
              console.error('Unhandled rejection:', event.reason);
              
              let errorMessage = 'Unknown error';
              let helpfulHint = '';
              
              if (event.reason instanceof Error) {
                errorMessage = event.reason.message;
                
                // Check for fetch errors
                if (errorMessage.includes('fetch')) {
                  helpfulHint = 'This might be a network error. Check that your API endpoint is correct and the server is running.';
                }
              } else if (typeof event.reason === 'string') {
                errorMessage = event.reason;
              } else {
                try {
                  errorMessage = JSON.stringify(event.reason);
                } catch {
                  errorMessage = String(event.reason);
                }
              }
              
              document.getElementById('root').innerHTML = \`
                <div class="error">
                  <strong>Unhandled Promise Rejection:</strong>
                  <br/><br/>
                  <div>\${errorMessage}</div>
                  \${helpfulHint ? \`
                    <div class="hint-box">
                      <strong>💡 Hint:</strong> \${helpfulHint}
                    </div>
                  \` : ''}
                </div>
              \`;
            });

            // Override fetch to provide helpful errors for unimplemented API calls
            const originalFetch = window.fetch;
            window.fetch = async (...args) => {
              const url = args[0];
              
              // If fetching the project API, let it go through to the real API
              if (typeof url === 'string' && url.includes('/api/projects')) {
                console.log('API call to:', url);
                try {
                  const response = await originalFetch(...args);
                  
                  // If the response is ok, clone it to read the data
                  if (response.ok) {
                    const clonedResponse = response.clone();
                    const data = await clonedResponse.json();
                    
                    // Log helpful info about the response structure
                    console.log('API Response structure:', {
                      hasData: 'data' in data,
                      dataType: Array.isArray(data.data) ? 'array' : typeof data.data,
                      dataLength: Array.isArray(data.data) ? data.data.length : 'N/A',
                      keys: Object.keys(data)
                    });
                  }
                  
                  return response;
                } catch (error) {
                  console.error('Fetch error:', error);
                  throw error;
                }
              }
              
              // For other unimplemented APIs, return mock data
              if (typeof url === 'string' && url.includes('/api/')) {
                console.warn('Mock API response for:', url);
                return {
                  ok: true,
                  json: async () => ({ message: 'Mock response - implement this endpoint' })
                };
              }
              
              // Otherwise, use the original fetch
              return originalFetch(...args);
            };

            try {
              // Execute the processed code
              ${processedCode}
            } catch (error) {
              console.error('Code execution error:', error);
              
              let errorMessage = error.message;
              let helpfulHint = '';
              
              // Check for common syntax errors
              if (errorMessage.includes('Unexpected token')) {
                helpfulHint = 'This is a syntax error. Check for missing brackets, parentheses, or semicolons.';
              } else if (errorMessage.includes('is not defined')) {
                const missingVar = errorMessage.match(/(\w+) is not defined/)?.[1];
                if (missingVar) {
                  helpfulHint = \`The variable or function "\${missingVar}" is not defined. Make sure it\\'s declared before use.\`;
                }
              } else if (errorMessage.includes('Cannot access') && errorMessage.includes('before initialization')) {
                helpfulHint = 'This error occurs when trying to use a variable before it\\'s declared. Check the order of your code.';
              }
              
              document.getElementById('root').innerHTML = \`
                <div class="error">
                  <strong>Code Execution Error:</strong>
                  <br/><br/>
                  <div style="margin-bottom: 12px;">\${errorMessage}</div>
                  
                  \${helpfulHint ? \`
                    <div class="hint-box">
                      <strong>💡 Hint:</strong> \${helpfulHint}
                    </div>
                  \` : ''}
                  
                  <small style="white-space: pre-wrap; opacity: 0.7;">\${error.stack}</small>
                </div>
              \`;
            }
          </script>
        </body>
      </html>
    `;
    };
    const refreshPreview = ()=>{
        setIsRefreshing(true);
        setError(null);
        setConsoleMessages([]); // Clear console on refresh
        if (!iframeRef.current) {
            setIsRefreshing(false);
            return;
        }
        try {
            const iframe = iframeRef.current;
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!iframeDoc) {
                throw new Error("Unable to access iframe document");
            }
            // Clear and rewrite the iframe content
            iframeDoc.open();
            iframeDoc.write(createPreviewContent(code));
            iframeDoc.close();
            // Listen for errors from the iframe
            iframe.contentWindow?.addEventListener("error", (event)=>{
                setError(`Runtime error: ${event.message}`);
            });
            // Set up message listener for console output
            window.addEventListener("message", handleConsoleMessage);
            setTimeout(()=>setIsRefreshing(false), 500);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to render preview");
            setIsRefreshing(false);
        }
    };
    const handleConsoleMessage = (event)=>{
        if (event.data.type === "console-output" && event.data.messages) {
            setConsoleMessages(event.data.messages);
        }
    };
    // Cleanup message listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodePreview.useEffect": ()=>{
            return ({
                "CodePreview.useEffect": ()=>{
                    window.removeEventListener("message", handleConsoleMessage);
                }
            })["CodePreview.useEffect"];
        }
    }["CodePreview.useEffect"], []);
    const clearConsole = ()=>{
        setConsoleMessages([]);
        // Clear console in iframe too
        if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
                type: "clear-console"
            }, "*");
        }
    };
    const formatConsoleArg = (arg)=>{
        if (arg === null) return "null";
        if (arg === undefined) return "undefined";
        if (typeof arg === "string") return arg;
        if (typeof arg === "number" || typeof arg === "boolean") return String(arg);
        if (typeof arg === "object") {
            try {
                return JSON.stringify(arg, null, 2);
            } catch  {
                return String(arg);
            }
        }
        return String(arg);
    };
    // Debounced refresh on code change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodePreview.useEffect": ()=>{
            const timer = setTimeout({
                "CodePreview.useEffect.timer": ()=>{
                    refreshPreview();
                }
            }["CodePreview.useEffect.timer"], 1000);
            return ({
                "CodePreview.useEffect": ()=>clearTimeout(timer)
            })["CodePreview.useEffect"];
        }
    }["CodePreview.useEffect"], [
        code
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-3 border-b border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-gray-300",
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: refreshPreview,
                        disabled: isRefreshing,
                        className: "p-1.5 rounded hover:bg-gray-700 disabled:opacity-50 transition-colors",
                        title: "Refresh preview",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: `w-4 h-4 text-gray-400 ${isRefreshing ? "animate-spin" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodePreview.tsx",
                            lineNumber: 699,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodePreview.tsx",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 p-3 bg-red-900/20 border border-red-800 rounded-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePreview.tsx",
                                lineNumber: 711,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: "Preview Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePreview.tsx",
                                        lineNumber: 713,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs opacity-80",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePreview.tsx",
                                        lineNumber: 714,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CodePreview.tsx",
                                lineNumber: 712,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 710,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CodePreview.tsx",
                    lineNumber: 709,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 ${isConsoleOpen ? "" : "h-full"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                ref: iframeRef,
                                className: "w-full h-full bg-gray-800",
                                title: "Code Preview",
                                sandbox: "allow-scripts allow-same-origin allow-modals",
                                style: {
                                    border: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodePreview.tsx",
                                lineNumber: 726,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodePreview.tsx",
                            lineNumber: 721,
                            columnNumber: 13
                        }, this),
                        isConsoleOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-700 bg-gray-900",
                            style: {
                                height: "200px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-3 py-2 bg-gray-800 border-b border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-300",
                                                    children: "Console"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 21
                                                }, this),
                                                consoleMessages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        "(",
                                                        consoleMessages.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CodePreview.tsx",
                                            lineNumber: 742,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: clearConsole,
                                                    className: "p-1 rounded hover:bg-gray-700 transition-colors",
                                                    title: "Clear console",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodePreview.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsConsoleOpen(false),
                                                    className: "p-1 rounded hover:bg-gray-700 transition-colors",
                                                    title: "Close console",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodePreview.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CodePreview.tsx",
                                            lineNumber: 753,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CodePreview.tsx",
                                    lineNumber: 741,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full overflow-auto p-2",
                                    style: {
                                        maxHeight: "calc(200px - 40px)"
                                    },
                                    children: consoleMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500 text-xs italic px-2 py-1",
                                        children: "Console output will appear here..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodePreview.tsx",
                                        lineNumber: 776,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            consoleMessages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex gap-2 px-2 py-1 rounded text-xs font-mono ${msg.type === "error" ? "bg-red-900/20 text-red-400" : msg.type === "warn" ? "bg-yellow-900/20 text-yellow-400" : "text-gray-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "opacity-50",
                                                            children: new Date(msg.timestamp).toLocaleTimeString("en-US", {
                                                                hour12: false,
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                                second: "2-digit",
                                                                fractionalSecondDigits: 3
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CodePreview.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 whitespace-pre-wrap break-all",
                                                            children: msg.args.map((arg)=>formatConsoleArg(arg)).join(" ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CodePreview.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/CodePreview.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 25
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: consoleEndRef
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CodePreview.tsx",
                                                lineNumber: 811,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CodePreview.tsx",
                                        lineNumber: 780,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodePreview.tsx",
                                    lineNumber: 771,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodePreview.tsx",
                            lineNumber: 737,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/CodePreview.tsx",
                lineNumber: 707,
                columnNumber: 7
            }, this),
            !isConsoleOpen && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsConsoleOpen(true),
                className: "flex items-center justify-center gap-2 p-2 bg-gray-800 border-t border-gray-700 hover:bg-gray-700 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                        className: "w-4 h-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 827,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-400",
                        children: "Show Console"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 828,
                        columnNumber: 11
                    }, this),
                    consoleMessages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: [
                            "(",
                            consoleMessages.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CodePreview.tsx",
                        lineNumber: 830,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CodePreview.tsx",
                lineNumber: 823,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CodePreview.tsx",
        lineNumber: 690,
        columnNumber: 5
    }, this);
}
_s(CodePreview, "ph0Tn7tOSn3N6MnNWL6bEy38j6k=");
_c = CodePreview;
var _c;
__turbopack_context__.k.register(_c, "CodePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TestRunner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TestRunner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TestRunner({ sessionId, code, testCases, onTestComplete }) {
    _s();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedTests, setExpandedTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const runTestInIframe = async (testCase, userCode)=>{
        return new Promise((resolve)=>{
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            const timeoutId = setTimeout(()=>{
                document.body.removeChild(iframe);
                resolve({
                    id: testCase.id,
                    name: testCase.name,
                    passed: false,
                    error: "Test timed out after " + (testCase.timeout || 5000) + "ms"
                });
            }, testCase.timeout || 5000);
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (!iframeDoc) throw new Error("Cannot access iframe");
                // Create test environment
                const testHTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
              <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script type="text/babel">
                const testResults = { passed: false, error: null, output: null };
                const startTime = performance.now();
                
                try {
                  // User code
                  ${userCode}
                  
                  // Wait a bit for React to render
                  setTimeout(() => {
                    try {
                      // Test code
                      const testFunction = () => {
                        ${testCase.test}
                      };
                      const result = testFunction();
                      testResults.output = result;
                      testResults.passed = true;
                    } catch (e) {
                      testResults.error = e.message;
                      testResults.passed = false;
                    }
                    
                    testResults.executionTime = performance.now() - startTime;
                    window.parent.postMessage({ 
                      type: 'testComplete', 
                      testId: '${testCase.id}',
                      results: testResults 
                    }, '*');
                  }, 100);
                } catch (e) {
                  window.parent.postMessage({ 
                    type: 'testComplete', 
                    testId: '${testCase.id}',
                    results: { 
                      passed: false, 
                      error: e.message,
                      executionTime: performance.now() - startTime
                    } 
                  }, '*');
                }
              </script>
            </body>
          </html>
        `;
                // Listen for test results
                const messageHandler = (event)=>{
                    if (event.data.type === "testComplete" && event.data.testId === testCase.id) {
                        clearTimeout(timeoutId);
                        window.removeEventListener("message", messageHandler);
                        document.body.removeChild(iframe);
                        const { results: testResults } = event.data;
                        resolve({
                            id: testCase.id,
                            name: testCase.name,
                            passed: testResults.passed,
                            error: testResults.error,
                            output: testResults.output,
                            executionTime: testResults.executionTime
                        });
                    }
                };
                window.addEventListener("message", messageHandler);
                iframeDoc.open();
                iframeDoc.write(testHTML);
                iframeDoc.close();
            } catch (error) {
                clearTimeout(timeoutId);
                document.body.removeChild(iframe);
                resolve({
                    id: testCase.id,
                    name: testCase.name,
                    passed: false,
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            }
        });
    };
    const runAllTests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestRunner.useCallback[runAllTests]": async ()=>{
            setIsRunning(true);
            setResults([]);
            const testResults = [];
            // Log test run event
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "events"), {
                sessionId,
                type: "test_run_started",
                timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                data: {
                    testCount: testCases.length
                }
            });
            // Run tests sequentially to avoid overwhelming the browser
            for (const testCase of testCases){
                const result = await runTestInIframe(testCase, code);
                testResults.push(result);
                setResults([
                    ...testResults
                ]);
            }
            // Calculate test statistics
            const passedCount = testResults.filter({
                "TestRunner.useCallback[runAllTests]": (r)=>r.passed
            }["TestRunner.useCallback[runAllTests]"]).length;
            const totalTime = testResults.reduce({
                "TestRunner.useCallback[runAllTests].totalTime": (sum, r)=>sum + (r.executionTime || 0)
            }["TestRunner.useCallback[runAllTests].totalTime"], 0);
            // Log test completion
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "events"), {
                sessionId,
                type: "test_run_completed",
                timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                data: {
                    passed: passedCount,
                    failed: testResults.length - passedCount,
                    totalTime,
                    results: testResults.map({
                        "TestRunner.useCallback[runAllTests]": (r)=>({
                                id: r.id,
                                passed: r.passed,
                                error: r.error
                            })
                    }["TestRunner.useCallback[runAllTests]"])
                }
            });
            // Update session with latest test results
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "sessions", sessionId), {
                lastTestRun: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                testResults: {
                    passed: passedCount,
                    total: testResults.length,
                    timestamp: new Date()
                }
            });
            setIsRunning(false);
            onTestComplete?.(testResults);
        }
    }["TestRunner.useCallback[runAllTests]"], [
        sessionId,
        code,
        testCases,
        onTestComplete
    ]);
    const toggleTestExpansion = (testId)=>{
        const newExpanded = new Set(expandedTests);
        if (newExpanded.has(testId)) {
            newExpanded.delete(testId);
        } else {
            newExpanded.add(testId);
        }
        setExpandedTests(newExpanded);
    };
    const getTestStatusIcon = (result)=>{
        if (!result) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-4 h-4 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/components/TestRunner.tsx",
            lineNumber: 239,
            columnNumber: 25
        }, this);
        if (result.passed) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "w-4 h-4 text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/components/TestRunner.tsx",
            lineNumber: 241,
            columnNumber: 14
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            className: "w-4 h-4 text-red-500"
        }, void 0, false, {
            fileName: "[project]/src/components/TestRunner.tsx",
            lineNumber: 242,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-medium",
                        children: "Test Results"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestRunner.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: runAllTests,
                        disabled: isRunning,
                        className: "flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this),
                                "Running..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                "Run Tests"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestRunner.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestRunner.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-2",
                children: [
                    testCases.map((testCase)=>{
                        const result = results.find((r)=>r.id === testCase.id);
                        const isExpanded = expandedTests.has(testCase.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-700 rounded overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleTestExpansion(testCase.id),
                                    className: "w-full p-3 flex items-center justify-between bg-gray-750 hover:bg-gray-700 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                getTestStatusIcon(result),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-300",
                                                    children: testCase.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestRunner.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                result && !result.passed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-red-400",
                                                    children: "Failed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestRunner.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TestRunner.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 text-xs",
                                            children: isExpanded ? "▼" : "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestRunner.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-gray-900 border-t border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mb-2",
                                            children: testCase.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TestRunner.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this),
                                        result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                result.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 p-2 bg-red-900/20 border border-red-800 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-red-400 font-mono",
                                                        children: result.error
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestRunner.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestRunner.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 25
                                                }, this),
                                                result.executionTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-2",
                                                    children: [
                                                        "Execution time: ",
                                                        result.executionTime.toFixed(2),
                                                        "ms"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TestRunner.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, testCase.id, true, {
                            fileName: "[project]/src/components/TestRunner.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this);
                    }),
                    results.length === 0 && !isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm",
                            children: 'Click "Run Tests" to execute test cases'
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestRunner.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TestRunner.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestRunner.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: [
                                "Total: ",
                                results.length,
                                " tests"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestRunner.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-400",
                                    children: [
                                        "Passed: ",
                                        results.filter((r)=>r.passed).length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-400",
                                    children: [
                                        "Failed: ",
                                        results.filter((r)=>!r.passed).length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TestRunner.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestRunner.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestRunner.tsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TestRunner.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TestRunner.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_s(TestRunner, "/q0n2GkxhGt0+236W+sXWV2QfhU=");
_c = TestRunner;
var _c;
__turbopack_context__.k.register(_c, "TestRunner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MarkdownRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarkdownRenderer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MarkdownRenderer({ content }) {
    _s();
    const processedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkdownRenderer.useMemo[processedHtml]": ()=>{
            let html = content;
            const escapeHtml = {
                "MarkdownRenderer.useMemo[processedHtml].escapeHtml": (text)=>{
                    const div = document.createElement("div");
                    div.textContent = text;
                    return div.innerHTML;
                }
            }["MarkdownRenderer.useMemo[processedHtml].escapeHtml"];
            // Pre-process: Escape HTML entities in code blocks to preserve them
            const codeBlocks = [];
            html = html.replace(/```[\s\S]*?```/g, {
                "MarkdownRenderer.useMemo[processedHtml]": (match)=>{
                    codeBlocks.push(match);
                    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            // Convert headers (most specific first)
            html = html.replace(/^#### (.+)$/gm, {
                "MarkdownRenderer.useMemo[processedHtml]": (match, text)=>{
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return `<h4 class="md-h4" id="${id}">${text}</h4>`;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            html = html.replace(/^### (.+)$/gm, {
                "MarkdownRenderer.useMemo[processedHtml]": (match, text)=>{
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return `<h3 class="md-h3" id="${id}">${text}</h3>`;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            html = html.replace(/^## (.+)$/gm, {
                "MarkdownRenderer.useMemo[processedHtml]": (match, text)=>{
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return `<h2 class="md-h2" id="${id}">${text}</h2>`;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            html = html.replace(/^# (.+)$/gm, {
                "MarkdownRenderer.useMemo[processedHtml]": (match, text)=>{
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return `<h1 class="md-h1" id="${id}">${text}</h1>`;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            // Special handling for Query Parameters and Response Format
            html = html.replace(/^\*\*(Query Parameters:?)\*\*$/gm, '<h5 class="md-api-section">$1</h5>');
            html = html.replace(/^\*\*(Response Format:?)\*\*$/gm, '<h5 class="md-api-section">$1</h5>');
            // Convert bold and italic (before other processing)
            html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="md-bold">$1</strong>');
            html = html.replace(/\*(.+?)\*/g, '<em class="md-italic">$1</em>');
            // Convert inline code (but not in code blocks)
            html = html.replace(/`([^`]+)`/g, '<code class="md-code-inline">$1</code>');
            // Process lists more carefully
            const lines = html.split("\n");
            const processedLines = [];
            let inList = false;
            let listIndentLevel = 0;
            for(let i = 0; i < lines.length; i++){
                const line = lines[i];
                const trimmedLine = line.trim();
                // Check if this is a list item
                const listMatch = line.match(/^(\s*)[-*]\s+(.+)$/);
                if (listMatch) {
                    const indent = listMatch[1].length;
                    const content = listMatch[2];
                    // Check if the content contains a nested structure (e.g., "Values: x, y, z")
                    const hasNestedValues = content.includes("Values:") || content.includes("default:");
                    if (!inList) {
                        processedLines.push('<ul class="md-list">');
                        inList = true;
                        listIndentLevel = indent;
                    } else if (indent > listIndentLevel) {
                        processedLines.push('<ul class="md-list md-nested">');
                        listIndentLevel = indent;
                    } else if (indent < listIndentLevel) {
                        processedLines.push("</ul>");
                        listIndentLevel = indent;
                    }
                    if (hasNestedValues) {
                        processedLines.push(`<li class="md-list-item md-param-item">${content}</li>`);
                    } else {
                        processedLines.push(`<li class="md-list-item">${content}</li>`);
                    }
                } else {
                    // Not a list item
                    if (inList && trimmedLine !== "") {
                        // Close any open lists
                        while(listIndentLevel >= 0){
                            processedLines.push("</ul>");
                            listIndentLevel -= 2;
                        }
                        inList = false;
                    }
                    processedLines.push(line);
                }
            }
            // Close any remaining open lists
            if (inList) {
                processedLines.push("</ul>");
            }
            html = processedLines.join("\n");
            // Restore code blocks and format them
            html = html.replace(/__CODE_BLOCK_(\d+)__/g, {
                "MarkdownRenderer.useMemo[processedHtml]": (match, index)=>{
                    const codeBlock = codeBlocks[parseInt(index)];
                    const langMatch = codeBlock.match(/```(\w*)\n([\s\S]*?)```/);
                    if (langMatch) {
                        const lang = langMatch[1] || "text";
                        const code = langMatch[2].trim();
                        return `<div class="md-code-block-wrapper">
          <div class="md-code-block-header">${lang.toUpperCase()}</div>
          <pre class="md-code-block"><code class="language-${lang}">${escapeHtml(code)}</code></pre>
        </div>`;
                    }
                    return codeBlock;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]);
            // Convert paragraphs
            html = html.split("\n\n").map({
                "MarkdownRenderer.useMemo[processedHtml]": (paragraph)=>{
                    const trimmed = paragraph.trim();
                    if (trimmed && !trimmed.startsWith("<")) {
                        return `<p class="md-paragraph">${trimmed}</p>`;
                    }
                    return trimmed;
                }
            }["MarkdownRenderer.useMemo[processedHtml]"]).join("\n");
            return html;
        }
    }["MarkdownRenderer.useMemo[processedHtml]"], [
        content
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-f2361e1dc169f958" + " " + "markdown-renderer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f2361e1dc169f958",
                children: '.markdown-renderer{color:#e5e7eb;font-size:15px;line-height:1.75}.md-h1{color:#f9fafb;border-bottom:2px solid #374151;margin:0 0 1.5rem;padding-bottom:.75rem;font-size:2.5rem;font-weight:700}.md-h2{color:#f3f4f6;border-bottom:1px solid #1f2937;margin:2.5rem 0 1.25rem;padding-bottom:.5rem;font-size:2rem;font-weight:600}.md-h3{color:#f3f4f6;margin:2rem 0 1rem;font-size:1.5rem;font-weight:600}.md-h4{color:#e5e7eb;margin:1.5rem 0 .75rem;font-size:1.25rem;font-weight:600}.md-paragraph{color:#d1d5db;margin:0 0 1.25rem}.md-list{margin:1rem 0;padding-left:0;list-style:none}.md-list.md-nested{border-left:2px solid #374151;margin:.5rem 0 .5rem 2rem;padding-left:1rem}.md-list-item{padding:.5rem 0 .5rem 1.5rem;line-height:1.6;position:relative}.md-list-item:before{content:"•";color:#60a5fa;font-size:1.2em;font-weight:700;position:absolute;left:0}.md-list-item.md-param-item{background:#1f2937;border-left:3px solid #3b82f6;border-radius:.375rem;margin:.5rem 0;padding:.75rem 1rem .75rem 2rem}.md-list-item.md-param-item:before{left:.75rem}.md-list-item .md-code-inline:first-child{color:#a78bfa;font-size:.95em;font-weight:600}.md-code-inline{color:#60a5fa;white-space:nowrap;background:#1f2937;border:1px solid #374151;border-radius:.25rem;padding:.125rem .375rem;font-family:Menlo,Monaco,Consolas,monospace;font-size:.875em}.md-code-block-wrapper{background:#1f2937;border:1px solid #374151;border-radius:.5rem;margin:1.5rem 0;overflow:hidden}.md-code-block-header{color:#9ca3af;letter-spacing:.05em;background:#111827;border-bottom:1px solid #374151;padding:.5rem 1rem;font-size:.75rem;font-weight:600}.md-code-block{background:#1f2937;margin:0;padding:1.25rem;overflow-x:auto}.md-code-block code{color:#e5e7eb;font-family:Menlo,Monaco,Consolas,monospace;font-size:.875rem;line-height:1.6}.md-code-block code.language-json{color:#fbbf24}.md-bold{color:#f3f4f6;font-weight:600}.md-paragraph .md-bold{margin-top:.5rem;display:inline-block}p.md-paragraph:has(.md-bold:first-child){margin-top:2rem}.md-italic{color:#d1d5db;font-style:italic}.md-h1,.md-h2,.md-h3{scroll-margin-top:2rem}.md-h2+.md-h3{margin-top:1.5rem}.md-h3+.md-h4{margin-top:1rem}.md-h4{background:#111827;border-left:4px solid #3b82f6;border-radius:.375rem;padding:.75rem 1rem;font-family:Menlo,Monaco,Consolas,monospace}.md-h3+.md-list{background:#111827;border-radius:.5rem;margin-top:.5rem;padding:1rem}.md-h2{margin-top:3rem}.md-h1+.md-h2{margin-top:2rem}.md-list-item.md-param-item{transition:all .2s}.md-list-item.md-param-item:hover{background:#264155;border-left-color:#60a5fa;transform:translate(2px)}.md-list-item+.md-list-item{margin-top:.25rem}.md-list-item.md-param-item+.md-list-item.md-param-item{margin-top:.75rem}@media (width<=768px){.markdown-renderer{font-size:14px}.md-h1{font-size:2rem}.md-h2{font-size:1.5rem}.md-h3{font-size:1.25rem}.md-h4{font-size:1.1rem}.md-code-block{padding:1rem;font-size:.8rem}.md-list.md-nested{margin-left:1rem}}.md-code-block::-webkit-scrollbar{background:#111827;height:8px}.md-code-block::-webkit-scrollbar-thumb{background:#4b5563;border-radius:4px}.md-code-block::-webkit-scrollbar-thumb:hover{background:#6b7280}.md-api-section{color:#60a5fa;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #3b82f6;margin:2rem 0 1rem;padding:.75rem 0;font-size:1.125rem;font-weight:700}.md-h3{background:linear-gradient(90deg,#1f2937,#0000);border-radius:.375rem;margin-left:-1rem;margin-right:-1rem;padding:.75rem 1rem}.md-api-section+.md-list{background:#0f172a;border:1px solid #1e293b;border-radius:.5rem;margin:1rem 0 2rem;padding:1.5rem}.md-api-section+.md-list .md-list-item{border-bottom:1px solid #1e293b;margin-bottom:1rem;padding-bottom:1rem}.md-api-section+.md-list .md-list-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}.md-nested .md-list-item{background:#3b82f60d;border-left:2px solid #3b82f6;border-radius:.25rem;margin:.25rem 0;padding:.5rem .75rem}.md-h2+.md-paragraph+.md-h3{background:#0f172a;border:1px solid #1e293b;margin-top:2rem;padding:1rem 1.5rem}.md-list-item .md-bold:first-child{color:#fbbf24;font-size:1.05em}html{scroll-behavior:smooth}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: processedHtml
                },
                className: "jsx-f2361e1dc169f958"
            }, void 0, false, {
                fileName: "[project]/src/components/MarkdownRenderer.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MarkdownRenderer.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(MarkdownRenderer, "Or3NdJnk8f+8n9qQthsSX84r01g=");
_c = MarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/codeTracking.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Types for future use when implementing more advanced diff algorithms
// interface CodeDiff {
//   oldCode: string;
//   newCode: string;
// }
// interface LineMapping {
//   lineNumber: number;
//   isModified: boolean;
//   isNew: boolean;
//   isDeleted: boolean;
// }
/**
 * Analyzes code differences and returns which lines were modified by AI
 */ __turbopack_context__.s({
    "cleanAIMarkers": (()=>cleanAIMarkers),
    "extractAIMarkers": (()=>extractAIMarkers),
    "getAIModifiedLines": (()=>getAIModifiedLines),
    "mergeDecorations": (()=>mergeDecorations)
});
function getAIModifiedLines(oldCode, newCode) {
    const oldLines = oldCode.split("\n");
    const newLines = newCode.split("\n");
    const modifiedLines = [];
    // First, try to extract from AI markers
    const markedLines = extractAIMarkers(newCode);
    if (markedLines.length > 0) {
        return markedLines;
    }
    // If no markers found, use diff algorithm
    const minLength = Math.min(oldLines.length, newLines.length);
    // Check modified lines
    for(let i = 0; i < minLength; i++){
        if (oldLines[i].trim() !== newLines[i].trim()) {
            modifiedLines.push(i + 1); // Line numbers are 1-indexed
        }
    }
    // Check added lines
    if (newLines.length > oldLines.length) {
        for(let i = minLength; i < newLines.length; i++){
            modifiedLines.push(i + 1);
        }
    }
    return modifiedLines;
}
function extractAIMarkers(code) {
    const lines = code.split("\n");
    const markedLines = [];
    // Pattern 1: Top comment with line ranges
    const topMarkerPattern = /\/\/\s*AI:\s*Modified lines?\s*([\d\-,\s]+)/i;
    const topMatch = code.match(topMarkerPattern);
    if (topMatch) {
        const lineRanges = topMatch[1].split(",").map((range)=>range.trim());
        lineRanges.forEach((range)=>{
            const [start, end] = range.split("-").map((n)=>parseInt(n.trim()));
            if (!isNaN(start)) {
                if (!isNaN(end)) {
                    for(let i = start; i <= end; i++){
                        markedLines.push(i);
                    }
                } else {
                    markedLines.push(start);
                }
            }
        });
    }
    // Pattern 2: Inline AI comments
    lines.forEach((line, index)=>{
        if (line.includes("// AI:") || line.includes("//AI:") || line.includes("// AI added") || line.includes("// AI modified") || line.includes("// AI: Added") || line.includes("// AI: Modified")) {
            const lineNumber = index + 1;
            if (!markedLines.includes(lineNumber)) {
                markedLines.push(lineNumber);
            }
        }
    });
    return markedLines.sort((a, b)=>a - b);
}
function mergeDecorations(existing, newLines) {
    const set = new Set([
        ...existing,
        ...newLines
    ]);
    return Array.from(set).sort((a, b)=>a - b);
}
function cleanAIMarkers(code) {
    const lines = code.split("\n");
    const markedLines = extractAIMarkers(code);
    const markerPattern = /\/\/\s*AI:\s*Modified lines?\s*\d+(?:-\d+)?/i;
    const cleanedLines = lines.filter((line)=>!markerPattern.test(line));
    return {
        cleanedCode: cleanedLines.join("\n"),
        markedLines
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/interview/[sessionId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InterviewPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AuthGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AIChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AIChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodePreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestRunner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-resizable-panels/dist/react-resizable-panels.browser.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$codeTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/codeTracking.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
// Dynamically import EnhancedCodeEditor to avoid SSR issues
const EnhancedCodeEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/EnhancedCodeEditor.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/EnhancedCodeEditor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
});
_c = EnhancedCodeEditor;
function InterviewInterface() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const sessionId = params.sessionId;
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [challenge, setChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rightPanelTab, setRightPanelTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("docs");
    const [elapsedTime, setElapsedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [codeFlash, setCodeFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "main",
            name: "App.jsx",
            content: "",
            language: "javascript",
            decorations: []
        }
    ]);
    const [activeFileId, setActiveFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main");
    const [aiChatMessages, setAiChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [aiChatDraft, setAiChatDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const saveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterviewInterface.useEffect": ()=>{
            if (!session?.startTime || session.status !== "in_progress") return;
            const interval = setInterval({
                "InterviewInterface.useEffect.interval": ()=>{
                    const start = new Date(session.startTime.seconds * 1000);
                    const now = new Date();
                    const diff = Math.floor((now.getTime() - start.getTime()) / 1000);
                    setElapsedTime(diff);
                }
            }["InterviewInterface.useEffect.interval"], 1000);
            return ({
                "InterviewInterface.useEffect": ()=>clearInterval(interval)
            })["InterviewInterface.useEffect"];
        }
    }["InterviewInterface.useEffect"], [
        session
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    const loadSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InterviewInterface.useCallback[loadSession]": async ()=>{
            try {
                // Get session data
                const sessionDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "sessions", sessionId));
                if (!sessionDoc.exists()) {
                    router.push("/dashboard");
                    return;
                }
                const sessionData = sessionDoc.data();
                setSession(sessionData);
                // Load challenge data
                const challengeDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "challenges", sessionData.challengeId));
                if (challengeDoc.exists()) {
                    const challengeData = {
                        id: challengeDoc.id,
                        ...challengeDoc.data()
                    };
                    setChallenge(challengeData);
                    // Initialize files based on challenge
                    const initialCode = sessionData.currentCode || challengeData.initialCode;
                    setFiles([
                        {
                            id: "main",
                            name: "App.jsx",
                            content: initialCode,
                            language: "javascript",
                            decorations: []
                        }
                    ]);
                    setCode(initialCode);
                    // Default to docs tab if documentation exists
                    if (challengeData.documentation) {
                        setRightPanelTab("docs");
                    } else {
                        setRightPanelTab("preview");
                    }
                }
                // Set up real-time listener for session updates
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "sessions", sessionId), {
                    "InterviewInterface.useCallback[loadSession].unsubscribe": (docSnapshot)=>{
                        if (docSnapshot.exists()) {
                            const updatedSession = docSnapshot.data();
                            setSession(updatedSession);
                        // Don't update code here to avoid conflicts with user edits
                        }
                    }
                }["InterviewInterface.useCallback[loadSession].unsubscribe"]);
                setLoading(false);
                return ({
                    "InterviewInterface.useCallback[loadSession]": ()=>unsubscribe()
                })["InterviewInterface.useCallback[loadSession]"];
            } catch (error) {
                console.error("Error loading session:", error);
                setLoading(false);
            }
        }
    }["InterviewInterface.useCallback[loadSession]"], [
        sessionId,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InterviewInterface.useEffect": ()=>{
            if (!sessionId) return;
            loadSession();
        }
    }["InterviewInterface.useEffect"], [
        sessionId,
        loadSession
    ]);
    const handleCodeChange = (value)=>{
        if (!value) return;
        setCode(value);
        setSaving(true);
        // Debounce save
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }
        saveTimeoutRef.current = setTimeout(async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "sessions", sessionId), {
                    currentCode: value,
                    lastUpdated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                setSaving(false);
            } catch (error) {
                console.error("Error saving code:", error);
                setSaving(false);
            }
        }, 1000);
    };
    const endInterview = async ()=>{
        if (confirm("Are you sure you want to end this interview?")) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "sessions", sessionId), {
                    status: "completed",
                    endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                router.push("/dashboard");
            } catch (error) {
                console.error("Error ending interview:", error);
            }
        }
    };
    const handleFileChange = (fileId, content)=>{
        setFiles((prev)=>prev.map((file)=>file.id === fileId ? {
                    ...file,
                    content
                } : file));
        // Update main code state if it's the active file
        if (fileId === activeFileId) {
            setCode(content);
            handleCodeChange(content);
        }
    };
    const handleFileSelect = (fileId)=>{
        setActiveFileId(fileId);
        const file = files.find((f)=>f.id === fileId);
        if (file) {
            setCode(file.content);
        }
    };
    const handleAddFile = ()=>{
        const newFile = {
            id: `file-${Date.now()}`,
            name: `Component${files.length}.jsx`,
            content: "// New component\nexport default function Component() {\n  return <div>New Component</div>;\n}",
            language: "javascript",
            decorations: []
        };
        setFiles((prev)=>[
                ...prev,
                newFile
            ]);
        setActiveFileId(newFile.id);
        setCode(newFile.content);
    };
    const handleCloseFile = (fileId)=>{
        if (files.length === 1) return; // Don't close the last file
        setFiles((prev)=>prev.filter((f)=>f.id !== fileId));
        if (activeFileId === fileId) {
            setActiveFileId(files[0].id);
            setCode(files[0].content);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this);
    }
    if (!session || !challenge) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Session not found"
            }, void 0, false, {
                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-white font-medium",
                                children: challenge.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            formatTime(elapsedTime),
                                            " / 45:00"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Saving..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: endInterview,
                                className: "flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    "End Interview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelGroup"], {
                    direction: "horizontal",
                    className: "h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                            defaultSize: 50,
                            minSize: 30,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelGroup"], {
                                direction: "vertical",
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                        defaultSize: 70,
                                        minSize: 30,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full bg-gray-900 transition-all duration-300 ${codeFlash ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedCodeEditor, {
                                                files: files,
                                                activeFileId: activeFileId,
                                                onFileChange: handleFileChange,
                                                onFileSelect: handleFileSelect,
                                                onFileAdd: handleAddFile,
                                                onFileClose: handleCloseFile,
                                                onChange: (value)=>{
                                                    if (value !== undefined) {
                                                        handleCodeChange(value);
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelResizeHandle"], {
                                        className: "h-1 bg-gray-700 hover:bg-gray-600 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                        defaultSize: 30,
                                        minSize: 0,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sessionId: sessionId,
                                            code: code,
                                            testCases: challenge.testCases?.map((tc)=>({
                                                    ...tc,
                                                    test: tc.test || "// Test implementation"
                                                })) || [],
                                            onTestComplete: (results)=>{
                                                // Calculate and update score if needed
                                                console.log("Test results:", results);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelResizeHandle"], {
                            className: "w-1 bg-gray-700 hover:bg-gray-600 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                            defaultSize: 50,
                            minSize: 25,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gray-800 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex border-b border-gray-700",
                                        children: [
                                            challenge?.documentation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRightPanelTab("docs"),
                                                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${rightPanelTab === "docs" ? "text-white bg-gray-900 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-4 w-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this),
                                                    "API Docs"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRightPanelTab("preview"),
                                                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${rightPanelTab === "preview" ? "text-white bg-gray-900 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Preview"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRightPanelTab("ai-chat"),
                                                className: `flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${rightPanelTab === "ai-chat" ? "text-white bg-gray-900 border-b-2 border-blue-500" : "text-gray-400 hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, this),
                                                    "AI Assistant",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-hidden",
                                        children: rightPanelTab === "docs" && challenge?.documentation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                                        defaultSize: 30,
                                                        minSize: 0,
                                                        maxSize: 40,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-gray-800 border-r border-gray-700 overflow-y-auto p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3",
                                                                    children: "Contents"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#overview",
                                                                            className: "block py-2 px-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors",
                                                                            children: "Overview"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 437,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ml-3 space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#api-documentation",
                                                                                    className: "block py-1.5 px-3 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors",
                                                                                    children: "API Documentation"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "ml-3 space-y-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: "#get-projects",
                                                                                        className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                        children: "GET /projects"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                        lineNumber: 451,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 450,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#requirements",
                                                                            className: "block py-2 px-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors",
                                                                            children: "Requirements"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 459,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ml-3 space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#1-project-overview-30-points",
                                                                                    className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                    children: "1. Project Overview (30pts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#2-filtering--sorting-25-points",
                                                                                    className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                    children: "2. Filtering & Sorting (25pts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 472,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#3-data-visualization-20-points",
                                                                                    className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                    children: "3. Data Visualization (20pts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 478,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#4-team-view-15-points",
                                                                                    className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                    children: "4. Team View (15pts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 484,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: "#5-performance--ux-10-points",
                                                                                    className: "block py-1 px-3 text-xs text-gray-500 hover:text-gray-300 transition-colors",
                                                                                    children: "5. Performance & UX (10pts)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                                    lineNumber: 490,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#bonus-challenges-optional",
                                                                            className: "block py-2 px-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors",
                                                                            children: "Bonus Challenges"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#evaluation-criteria",
                                                                            className: "block py-2 px-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors",
                                                                            children: "Evaluation Criteria"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                            lineNumber: 503,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelResizeHandle"], {
                                                        className: "w-1 bg-gray-700 hover:bg-gray-600 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$browser$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                                        defaultSize: 70,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full overflow-auto bg-gray-900 px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "max-w-4xl mx-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    content: challenge.documentation
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this) : rightPanelTab === "preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodePreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            code: code
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col bg-gray-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AIChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sessionId: sessionId,
                                                currentCode: code,
                                                challengeInfo: {
                                                    title: challenge.title,
                                                    description: challenge.description
                                                },
                                                messages: aiChatMessages,
                                                draftMessage: aiChatDraft,
                                                onMessagesChange: setAiChatMessages,
                                                onDraftChange: setAiChatDraft,
                                                onCodeUpdate: (newCode, modifiedLines)=>{
                                                    console.log("AI Code Update:", {
                                                        modifiedLines,
                                                        hasModifiedLines: !!modifiedLines,
                                                        lineCount: modifiedLines?.length
                                                    });
                                                    // Track AI modifications
                                                    const detectedLines = modifiedLines || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$codeTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIModifiedLines"])(code, newCode);
                                                    console.log("Detected lines:", detectedLines);
                                                    // Update files with AI decorations
                                                    setFiles((prev)=>prev.map((file)=>{
                                                            if (file.id === activeFileId) {
                                                                const existingDecorations = file.decorations || [];
                                                                const mergedDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$codeTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDecorations"])(existingDecorations, detectedLines);
                                                                console.log("Merged decorations:", mergedDecorations);
                                                                return {
                                                                    ...file,
                                                                    content: newCode,
                                                                    decorations: mergedDecorations
                                                                };
                                                            }
                                                            return file;
                                                        }));
                                                    setCode(newCode);
                                                    handleCodeChange(newCode);
                                                    // Flash effect when AI updates code
                                                    setCodeFlash(true);
                                                    setTimeout(()=>setCodeFlash(false), 1000);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s(InterviewInterface, "8lJFlhEkNODFsy5f7zTjwzdS8w8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = InterviewInterface;
function InterviewPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InterviewInterface, {}, void 0, false, {
            fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
            lineNumber: 601,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/interview/[sessionId]/page.tsx",
        lineNumber: 600,
        columnNumber: 5
    }, this);
}
_c2 = InterviewPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EnhancedCodeEditor");
__turbopack_context__.k.register(_c1, "InterviewInterface");
__turbopack_context__.k.register(_c2, "InterviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_073b3b87._.js.map