import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Target, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Database, 
  Lightbulb,
  Download,
  ShoppingCart,
  Star,
  UserCheck,
  AlertTriangle,
  Zap
} from "lucide-react";

// Customer segment data
const customerSegments = [
  {
    id: 0,
    name: "Mature Moderates",
    type: "Average Customers",
    size: 45,
    percentage: 22.5,
    avgAge: 56.3,
    avgIncome: 54.3,
    avgSpending: 49.1,
    ageRange: "43-70",
    incomeRange: "$38k-79k",
    spendingRange: "35-60",
    genderSplit: { female: 26, male: 19 },
    insight: "Middle-income customers with moderate spending patterns",
    recommendation: "Balanced marketing approach with mid-range products and moderate promotional activities.",
    priority: "Medium",
    color: "bg-blue-500",
    icon: Users
  },
  {
    id: 1,
    name: "Young Professionals",
    type: "Average Customers",
    size: 39,
    percentage: 19.5,
    avgAge: 26.8,
    avgIncome: 57.1,
    avgSpending: 48.1,
    ageRange: "18-40",
    incomeRange: "$39k-76k",
    spendingRange: "10-61",
    genderSplit: { female: 25, male: 14 },
    insight: "Middle-income customers with moderate spending patterns",
    recommendation: "Balanced marketing approach with mid-range products and moderate promotional activities.",
    priority: "Medium",
    color: "bg-green-500",
    icon: UserCheck
  },
  {
    id: 2,
    name: "Wealthy Conservatives",
    type: "High Income, Low Spenders",
    size: 33,
    percentage: 16.5,
    avgAge: 41.9,
    avgIncome: 88.9,
    avgSpending: 17.0,
    ageRange: "19-59",
    incomeRange: "$71k-137k",
    spendingRange: "1-39",
    genderSplit: { female: 14, male: 19 },
    insight: "Wealthy but conservative spenders with high income but low spending score",
    recommendation: "Target with value propositions, exclusive offers, and premium quality products to convert them to high spenders.",
    priority: "High",
    color: "bg-orange-500",
    icon: AlertTriangle
  },
  {
    id: 3,
    name: "Premium Shoppers",
    type: "High Value Customers",
    size: 39,
    percentage: 19.5,
    avgAge: 32.7,
    avgIncome: 86.5,
    avgSpending: 82.1,
    ageRange: "27-40",
    incomeRange: "$69k-137k",
    spendingRange: "63-97",
    genderSplit: { female: 21, male: 18 },
    insight: "Premium customers with high income and high spending score",
    recommendation: "Focus on premium products, loyalty programs, and personalized services. These are your most valuable customers.",
    priority: "Critical",
    color: "bg-purple-500",
    icon: Star
  },
  {
    id: 4,
    name: "Budget Enthusiasts",
    type: "Low Income, High Spenders",
    size: 23,
    percentage: 11.5,
    avgAge: 25.0,
    avgIncome: 25.3,
    avgSpending: 77.6,
    ageRange: "18-35",
    incomeRange: "$15k-39k",
    spendingRange: "39-99",
    genderSplit: { female: 13, male: 10 },
    insight: "Budget-conscious but frequent shoppers with low income but high spending score",
    recommendation: "Offer affordable products, discounts, and payment plans. Focus on volume sales and frequent promotions.",
    priority: "High",
    color: "bg-yellow-500",
    icon: Zap
  },
  {
    id: 5,
    name: "Cost-Conscious Savers",
    type: "Budget Customers",
    size: 21,
    percentage: 10.5,
    avgAge: 45.5,
    avgIncome: 26.3,
    avgSpending: 19.4,
    ageRange: "20-67",
    incomeRange: "$16k-39k",
    spendingRange: "3-40",
    genderSplit: { female: 13, male: 8 },
    insight: "Low income and low spending customers",
    recommendation: "Focus on basic products, competitive pricing, and essential items. Consider cost-effective marketing channels.",
    priority: "Low",
    color: "bg-gray-500",
    icon: ShoppingCart
  }
];

const priorityColors = {
  "Critical": "bg-red-100 text-red-800 border-red-200",
  "High": "bg-orange-100 text-orange-800 border-orange-200",
  "Medium": "bg-blue-100 text-blue-800 border-blue-200",
  "Low": "bg-gray-100 text-gray-800 border-gray-200"
};

const analysisMetrics = {
  totalCustomers: 200,
  optimalClusters: 6,
  silhouetteScore: 0.428,
  topSegmentValue: 19.5,
  averageAge: 38.9,
  averageIncome: 60.6,
  averageSpending: 50.2
};

export default function CustomerSegmentationDashboard() {
  const [selectedSegment, setSelectedSegment] = useState(customerSegments[3]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mall Customer Segmentation
                </h1>
                <p className="text-sm text-muted-foreground">Strategic Marketing Intelligence Dashboard</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Customers</p>
                  <p className="text-3xl font-bold text-blue-900">{analysisMetrics.totalCustomers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Customer Segments</p>
                  <p className="text-3xl font-bold text-purple-900">{analysisMetrics.optimalClusters}</p>
                </div>
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Model Quality</p>
                  <p className="text-3xl font-bold text-green-900">{(analysisMetrics.silhouetteScore * 100).toFixed(1)}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Avg. Income</p>
                  <p className="text-3xl font-bold text-orange-900">${analysisMetrics.averageIncome.toFixed(0)}k</p>
                </div>
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="segments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border">
            <TabsTrigger value="segments" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Customer Segments
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Marketing Insights
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Raw Data
            </TabsTrigger>
          </TabsList>

          {/* Customer Segments Tab */}
          <TabsContent value="segments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Segment Cards */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Customer Segments Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {customerSegments.map((segment) => {
                    const Icon = segment.icon;
                    return (
                      <Card 
                        key={segment.id} 
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                          selectedSegment.id === segment.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                        }`}
                        onClick={() => setSelectedSegment(segment)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${segment.color}`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{segment.name}</CardTitle>
                                <CardDescription className="text-sm">{segment.type}</CardDescription>
                              </div>
                            </div>
                            <Badge className={priorityColors[segment.priority]}>
                              {segment.priority}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Size</span>
                              <span className="font-semibold">{segment.size} customers ({segment.percentage}%)</span>
                            </div>
                            <Progress value={segment.percentage} className="h-2" />
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Avg Age</span>
                                <p className="font-semibold">{segment.avgAge.toFixed(1)} years</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Avg Income</span>
                                <p className="font-semibold">${segment.avgIncome.toFixed(0)}k</p>
                              </div>
                            </div>
                            <div className="text-center">
                              <span className="text-muted-foreground text-sm">Spending Score</span>
                              <p className="text-2xl font-bold text-blue-600">{segment.avgSpending.toFixed(0)}/100</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Selected Segment Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Segment Details</h3>
                <Card className="sticky top-32">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${selectedSegment.color}`}>
                        <selectedSegment.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{selectedSegment.name}</CardTitle>
                        <CardDescription>{selectedSegment.type}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Demographics */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Demographics
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Size:</span>
                          <span className="font-medium">{selectedSegment.size} customers ({selectedSegment.percentage}%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age Range:</span>
                          <span className="font-medium">{selectedSegment.ageRange} years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Female:</span>
                          <span className="font-medium">{selectedSegment.genderSplit.female} ({((selectedSegment.genderSplit.female / selectedSegment.size) * 100).toFixed(0)}%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Male:</span>
                          <span className="font-medium">{selectedSegment.genderSplit.male} ({((selectedSegment.genderSplit.male / selectedSegment.size) * 100).toFixed(0)}%)</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Financial Profile */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Financial Profile
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Income Range:</span>
                          <span className="font-medium">{selectedSegment.incomeRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Income:</span>
                          <span className="font-medium">${selectedSegment.avgIncome.toFixed(0)}k</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Spending Range:</span>
                          <span className="font-medium">{selectedSegment.spendingRange}/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Spending:</span>
                          <span className="font-medium text-blue-600">{selectedSegment.avgSpending.toFixed(1)}/100</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Insights */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Key Insight
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">{selectedSegment.insight}</p>
                      
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Marketing Strategy
                      </h4>
                      <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-200">
                        {selectedSegment.recommendation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <h2 className="text-2xl font-bold">Data Analysis & Visualizations</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Data Exploration</CardTitle>
                  <CardDescription>Comprehensive overview of customer demographics and behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                    <img 
                      src="/customer_data_exploration.png" 
                      alt="Customer Data Exploration" 
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimal Clusters Analysis</CardTitle>
                  <CardDescription>Elbow method and silhouette analysis for determining optimal cluster count</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                    <img 
                      src="/optimal_clusters_analysis.png" 
                      alt="Optimal Clusters Analysis" 
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cluster Analysis Visualization</CardTitle>
                <CardDescription>Detailed visualization of all customer segments and their characteristics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                  <img 
                    src="/cluster_analysis_visualization.png" 
                    alt="Cluster Analysis Visualization" 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketing Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <h2 className="text-2xl font-bold">Strategic Marketing Recommendations</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Priority Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Priority Actions
                  </CardTitle>
                  <CardDescription>Most critical customer segments requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerSegments
                      .filter(s => s.priority === 'Critical' || s.priority === 'High')
                      .sort((a, b) => (b.priority === 'Critical' ? 1 : 0) - (a.priority === 'Critical' ? 1 : 0))
                      .map((segment) => {
                        const Icon = segment.icon;
                        return (
                          <div key={segment.id} className="p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${segment.color} flex-shrink-0`}>
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold">{segment.name}</h4>
                                  <Badge className={priorityColors[segment.priority]}>
                                    {segment.priority}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{segment.insight}</p>
                                <p className="text-sm bg-blue-50 p-2 rounded border border-blue-200">
                                  {segment.recommendation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Revenue Opportunities
                  </CardTitle>
                  <CardDescription>Potential revenue growth strategies by segment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Premium Shoppers (19.5%)</h4>
                      <p className="text-sm text-purple-700 mb-2">Highest value segment with $86.5k income and 82.1 spending score</p>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Implement VIP loyalty programs</li>
                        <li>• Offer exclusive early access to new products</li>
                        <li>• Provide personalized shopping experiences</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Wealthy Conservatives (16.5%)</h4>
                      <p className="text-sm text-orange-700 mb-2">High income but low spending - major conversion opportunity</p>
                      <ul className="text-sm text-orange-600 space-y-1">
                        <li>• Create value-focused marketing campaigns</li>
                        <li>• Offer premium quality guarantees</li>
                        <li>• Provide exclusive member pricing</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Budget Enthusiasts (11.5%)</h4>
                      <p className="text-sm text-yellow-700 mb-2">High engagement with limited budget - volume opportunity</p>
                      <ul className="text-sm text-yellow-600 space-y-1">
                        <li>• Implement frequent sales and promotions</li>
                        <li>• Offer payment plans and financing options</li>
                        <li>• Focus on affordable product lines</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  Implementation Roadmap
                </CardTitle>
                <CardDescription>Recommended timeline for implementing customer segmentation strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-900">Immediate (Week 1-2)</h4>
                    <ul className="text-sm text-red-700 mt-2 space-y-1">
                      <li>• Launch premium loyalty program for Premium Shoppers</li>
                      <li>• Create exclusive offers for Wealthy Conservatives</li>
                      <li>• Set up targeted email campaigns for each segment</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-900">Short-term (Week 3-8)</h4>
                    <ul className="text-sm text-orange-700 mt-2 space-y-1">
                      <li>• Implement personalized product recommendations</li>
                      <li>• Launch budget-friendly product lines for Budget Enthusiasts</li>
                      <li>• Develop segment-specific promotional calendars</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900">Long-term (Month 3-6)</h4>
                    <ul className="text-sm text-green-700 mt-2 space-y-1">
                      <li>• Establish segment-specific customer service protocols</li>
                      <li>• Develop custom product lines for each segment</li>
                      <li>• Implement advanced personalization algorithms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Raw Data Tab */}
          <TabsContent value="data" className="space-y-6">
            <h2 className="text-2xl font-bold">Data Summary</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dataset Overview</CardTitle>
                  <CardDescription>Key statistics about the customer dataset</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-600 font-medium">Total Customers</p>
                        <p className="text-2xl font-bold text-blue-900">200</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-purple-600 font-medium">Features</p>
                        <p className="text-2xl font-bold text-purple-900">5</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-600 font-medium">Female Customers</p>
                        <p className="text-2xl font-bold text-green-900">112 (56%)</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-sm text-orange-600 font-medium">Male Customers</p>
                        <p className="text-2xl font-bold text-orange-900">88 (44%)</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">Statistical Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Average Age:</span>
                          <span className="font-medium">38.9 years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age Range:</span>
                          <span className="font-medium">18-70 years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Average Income:</span>
                          <span className="font-medium">$60.6k</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Income Range:</span>
                          <span className="font-medium">$15k-$137k</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Average Spending Score:</span>
                          <span className="font-medium">50.2/100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Spending Range:</span>
                          <span className="font-medium">1-99/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clustering Analysis</CardTitle>
                  <CardDescription>Technical details about the segmentation model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-600 font-medium">Silhouette Score</p>
                      <p className="text-2xl font-bold text-green-900">0.428</p>
                      <p className="text-xs text-green-600">Good clustering quality</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Algorithm:</span>
                        <span className="font-medium">K-Means Clustering</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Optimal Clusters:</span>
                        <span className="font-medium">6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Features Used:</span>
                        <span className="font-medium">Age, Income, Spending</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Preprocessing:</span>
                        <span className="font-medium">StandardScaler</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">Cluster Distribution</h4>
                      <div className="space-y-2">
                        {customerSegments.map((segment) => (
                          <div key={segment.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                              <span>{segment.name}</span>
                            </div>
                            <span className="font-medium">{segment.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
