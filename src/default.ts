export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- 本站仅用于演示，请点击下方设置齿轮，填入自己的 key 才可使用。
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 由 [OPenOneKun](https://github.com/OPenOneKun) 修改自 [ourongxing](https://github.com/ourongxing/chatgpt-vercel) 源码为 [Diu](https://github.com/ddiu8081/chatgpt-demo)。
- **Shift+Enter** 换行。开头输入 **/** 或者 **空格** 搜索 Prompt 预设。点击输入框滚动到底部。`