# nexus-auto-connect
This script automates the connection process for Nexus.xyz by clicking the "CONNECT TO NEXUS" button on the platform. It saves time by eliminating the need for manual clicks and is designed to work directly in your browser's console


🚀 **自动连接 Nexus.xyz 的脚本！** ⚡️

👨‍💻 想让连接 Nexus.xyz 更省时？用这个简单的 **控制台脚本**，一键自动连接，跳过手动操作，轻松搞定！💡

🔧 **如何使用**：
1. 打开 **Nexus.xyz** 网站
2. 按下 **F12** 打开开发者工具，切换到 **控制台**（Console）
3. **首次粘贴时，浏览器会警告要求确认是否允许粘贴代码**。在弹出框中输入 **"allow pasting"**，然后按下 **Enter**。
4. 粘贴下面的脚本并按下 **Enter**，脚本会自动帮你点击连接按钮，节省时间！⚡️

📜 **脚本代码：**
```javascript
function findElementByXPath(query) {
    const evaluationResult = document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const matchedNode = evaluationResult.singleNodeValue;

    if (matchedNode) {
        return matchedNode;
    } else {
        console.info("未找到元素");
        return null;
    }
}


function autoConnectToNexus() {
    // 获取“CONNECT TO NEXUS”按钮的文本
    const textElement = findElementByXPath('/html/body/div[3]/div[2]/main/main/div[2]/div/div/div[1]/div[2]/div/div/p');

    if (textElement) {
        const displayedText = textElement.textContent.trim();
        console.info("找到的元素:", textElement);

        // 如果文本是 "CONNECT TO NEXUS"，点击按钮
        if (displayedText === "CONNECT TO NEXUS") {
            const connectButton = findElementByXPath("/html/body/div[3]/div[2]/main/main/div[2]/div/div/div[1]/div[1]/div/div/div/div/div[2]");

            if (connectButton) {
                connectButton.click();
                console.info("成功点击连接按钮。");
            } else {
                console.info("未找到连接按钮。");
            }
        } else {
            console.info("文本不是 'CONNECT TO NEXUS'，跳过操作。");
        }
    } else {
        console.info("未找到文本元素。");
    }
}

console.info(
    "%c作者信息：\n%cTwitter: OxStackCoder\n%cWeChat: Code-love\n%cTelegram: leiCoder",
    "font-size: 18px; font-weight: bold; color: #3498db;",
    "font-size: 16px; color: #1DA1F2;",
    "font-size: 16px; color: #25D366;",
    "font-size: 16px; color: #0088cc;"
);



setTimeout(() => {
    autoConnectToNexus();
}, 10000); // 1000ms * 10

setInterval(() => {
    autoConnectToNexus();
}, 10000); // 1000ms * 10

```

📱 关注我：  
🐦 **Twitter**: [@OxStackCoder](https://x.com/OxStackCoder)  
💬 **WeChat**: Code-love  
🌍 **Telegram**: [leiCoder](https://t.me/leiCoder)


---

### 重要：
1. **明确指出警告**：第一次粘贴时，浏览器会显示一个警告，要求输入 `allow pasting` 来允许粘贴。这一点非常重要，确保用户了解这一点并按正确的方式操作。
