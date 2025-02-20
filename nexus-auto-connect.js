// ==UserScript==
// @name        Custom Nexus Auto Connect Script
// @namespace   COder Scripts
// @match       https://app.nexus.xyz/*
// @grant       none
// @version     1.0
// @Twitter: OxStackCoder
// @description Automates connection to Nexus on the Nexus.xyz platform
// ==/UserScript==


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
