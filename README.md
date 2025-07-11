# Mall Customer Segmentation Dashboard

An interactive web dashboard for analyzing customer segments and developing targeted marketing strategies. Built with React, TypeScript, and modern analytics visualization.

## 🎯 Features

- **6 Distinct Customer Segments** with detailed demographic profiles
- **Interactive Visualizations** showing spending patterns and demographics
- **Marketing Strategy Recommendations** for each customer segment
- **Real-time Segment Exploration** with detailed insights
- **Responsive Design** optimized for desktop and mobile
- **Export Capabilities** for marketing team integration

## 📊 Customer Segments Identified

1. **Premium Shoppers** (19.5%) - High income, high spending - your most valuable customers
2. **Wealthy Conservatives** (16.5%) - High income, low spending - major conversion opportunity  
3. **Mature Moderates** (22.5%) - Middle income, moderate spending - stable customer base
4. **Young Professionals** (19.5%) - Growing demographic with future potential
5. **Budget Enthusiasts** (11.5%) - High engagement despite budget constraints
6. **Cost-Conscious Savers** (10.5%) - Price-sensitive shoppers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mall-customer-segmentation-dashboard.git
cd mall-customer-segmentation-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Analytics**: K-means clustering algorithm
- **Charts**: Custom visualization components

## 📱 Dashboard Sections

### Customer Segments
- Interactive segment cards with key metrics
- Detailed demographic breakdowns
- Financial profiles and spending patterns
- Gender distribution analysis

### Analysis & Visualizations
- Customer data exploration charts
- Optimal cluster analysis graphs
- 3D segment visualization
- Correlation matrices

### Marketing Insights
- Priority action recommendations
- Revenue opportunity analysis
- Implementation roadmap
- Segment-specific strategies

### Raw Data
- Dataset statistics and overview
- Clustering model details
- Technical analysis metrics

## 🎨 Customization

### Theme Configuration

The project uses Tailwind CSS V4 with custom theming in `src/index.css`:

```css
@theme inline {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
  /* Custom color variables */
}
```

### Adding New Segments

To add or modify customer segments, update the `customerSegments` array in `src/App.tsx`:

```typescript
const customerSegments = [
  {
    id: 0,
    name: "Your Segment Name",
    type: "Segment Type",
    // ... other properties
  }
];
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### GitHub Pages

Add deployment workflow in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📈 Analytics Integration

### Adding Google Analytics

1. Add tracking ID to environment variables
2. Install Google Analytics package:

```bash
npm install gtag
```

3. Configure in `src/main.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Check the documentation in `/docs`
- Review the deployment guides

## 🔄 Updates

To update the analysis with new customer data:

1. Replace the data files in `/public`
2. Update segment configurations in `src/App.tsx`
3. Rebuild and redeploy

---

**Built with modern web technologies for scalable customer analytics** ⚡
