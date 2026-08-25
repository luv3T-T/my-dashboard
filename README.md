# 艾欣 · 财务数据分析作品集

暗金色系、金融风格的个人作品集网站，使用 React + Vite 构建，面向 PC 端展示，版心约 1700px。

## 本地运行

```bash
pnpm install
pnpm run dev
```

生产构建：

```bash
pnpm run build
pnpm run preview
```

## 目录结构

```text
src/
  components/    页面组件（Hero、About、Projects、Strengths、Contact）
  data.js        简历与项目数据
  hooks/         滚动渐显等交互
  styles.css     全局样式
public/assets/   视频背景与项目图片（当前为占位素材）
scripts/         素材生成脚本
```

## 后续替换素材

- `public/assets/hero-*`：首屏目前为纯黑色背景，原大理石视频/海报素材已移出 `public`，如需恢复可重新运行 `scripts/generate_hero_marble.py`。
- `public/assets/project-*.webp`、`avatar.webp`：项目图与头像的 WebP 版本，站点实际加载这些文件。
- `public/assets/project-*.png`：项目大图，替换为实际项目截图。
- `public/assets/avatar.png`：头像，替换为个人照片或正式头像。
- `src/data.js`：简历文字、项目描述、联系方式等信息入口。
