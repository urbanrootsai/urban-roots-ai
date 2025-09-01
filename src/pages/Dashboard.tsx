import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sprout, 
  Thermometer, 
  Droplets, 
  BarChart3, 
  Wifi, 
  WifiOff, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  MapPin,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const sensorData = [
    { id: 1, name: "Field A-1", location: "North Section", status: "online", soilMoisture: 68, temperature: 24, ph: 6.5 },
    { id: 2, name: "Field A-2", location: "South Section", status: "online", soilMoisture: 45, temperature: 26, ph: 6.8 },
    { id: 3, name: "Field B-1", location: "East Section", status: "offline", soilMoisture: 32, temperature: 22, ph: 7.1 },
  ];

  const aiRecommendations = [
    {
      priority: "high",
      title: "Irrigation Needed - Field A-2",
      description: "Soil moisture dropped to 45%. Recommend watering within 6 hours.",
      action: "Water Now"
    },
    {
      priority: "medium", 
      title: "pH Adjustment - Field B-1",
      description: "pH level at 7.1 is slightly alkaline. Consider soil amendment.",
      action: "Schedule Treatment"
    },
    {
      priority: "low",
      title: "Sensor Maintenance",
      description: "Field B-1 sensor offline for 2 hours. Check connection.",
      action: "Inspect Sensor"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                <Sprout className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Urban Roots AI</h1>
                <p className="text-sm text-muted-foreground">Agricultural Monitoring Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/">Logout</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
              <Wifi className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2/3</div>
              <p className="text-xs text-muted-foreground">1 sensor offline</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Soil Moisture</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56.5%</div>
              <p className="text-xs text-muted-foreground">+2.1% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24°C</div>
              <p className="text-xs text-muted-foreground">Optimal range</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yield Prediction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+38%</div>
              <p className="text-xs text-muted-foreground">vs. traditional methods</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sensors" className="space-y-6">
          <TabsList>
            <TabsTrigger value="sensors">Sensor Data</TabsTrigger>
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="sensors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Field Sensors</CardTitle>
                <CardDescription>
                  Real-time monitoring data from IoT sensors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sensorData.map((sensor) => (
                    <div key={sensor.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {sensor.status === "online" ? (
                            <Wifi className="h-5 w-5 text-green-500" />
                          ) : (
                            <WifiOff className="h-5 w-5 text-red-500" />
                          )}
                          <div>
                            <h3 className="font-semibold">{sensor.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {sensor.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium">Moisture</div>
                          <div className="text-lg font-bold text-primary">{sensor.soilMoisture}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">Temp</div>
                          <div className="text-lg font-bold">{sensor.temperature}°C</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">pH</div>
                          <div className="text-lg font-bold">{sensor.ph}</div>
                        </div>
                        <Badge variant={sensor.status === "online" ? "default" : "destructive"}>
                          {sensor.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Recommendations</CardTitle>
                <CardDescription>
                  Intelligent insights to optimize your farming operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiRecommendations.map((rec, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                          rec.priority === "high" ? "text-red-500" : 
                          rec.priority === "medium" ? "text-yellow-500" : "text-blue-500"
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold">{rec.title}</h3>
                            <Badge variant={getPriorityColor(rec.priority) as any}>
                              {rec.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {rec.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Farming Analytics</CardTitle>
                <CardDescription>
                  Data insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Crop Health Score</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Water Efficiency</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Nutrient Balance</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pest Risk Level</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-3">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Last irrigation: 2 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        <span>AI analysis completed: 15 minutes ago</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Droplets className="h-4 w-4 text-muted-foreground" />
                        <span>Next watering recommended: In 4 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;