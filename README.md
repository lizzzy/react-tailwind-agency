# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



```
nvm install 22.12.0
npm install -g yarn
yarn create vite	# yarn或npm
Project name: react-tailwind-agency	# 项目名称
Select a variant: JavaScript
Use rolldown-vite (Experimental)?: No
Install with yarn and start now? Yes

# 安装tailwindcss
npm install tailwindcss @tailwindcss/vite -D
```

VSCode安装插件

- ES7 React/Redux/GraphQL/React-Native snip
- Tailwind CSS IntelliSense
  如果不提示 Setting中**`editor.quickSuggestions`** `strings` 设置为`on`

