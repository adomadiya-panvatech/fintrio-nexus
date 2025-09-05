import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

const reportTemplates = [
  {
    id: 1,
    name: "Investor Statement",
    description: "Detailed investor portfolio statements",
    icon: FileText,
    category: "investor",
    frequency: "Monthly"
  },
  {
    id: 2,
    name: "Cash Flow Report",
    description: "Investment cash flow analysis",
    icon: TrendingUp,
    category: "financial",
    frequency: "Weekly"
  },
  {
    id: 3,
    name: "AUM History",
    description: "Assets under management tracking",
    icon: BarChart3,
    category: "analytics",
    frequency: "Daily"
  },
  {
    id: 4,
    name: "Subscription Summary",
    description: "New subscriptions and redemptions",
    icon: Users,
    category: "investor",
    frequency: "Monthly"
  },
  {
    id: 5,
    name: "Compliance Report",
    description: "Regulatory compliance tracking",
    icon: FileText,
    category: "compliance",
    frequency: "Quarterly"
  },
  {
    id: 6,
    name: "Performance Summary",
    description: "Investment performance metrics",
    icon: DollarSign,
    category: "financial",
    frequency: "Monthly"
  }
];

const recentReports = [
  {
    id: 1,
    name: "Monthly Investor Statement - November 2024",
    createdAt: "2024-12-01",
    status: "completed",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "Cash Flow Report - Week 48",
    createdAt: "2024-11-30",
    status: "completed",
    size: "1.8 MB"
  },
  {
    id: 3,
    name: "Compliance Report - Q4 2024",
    createdAt: "2024-11-28",
    status: "generating",
    size: "-"
  }
];

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Generate and manage financial reports</p>
        </div>
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          Schedule Report
        </Button>
      </motion.div>

      {/* Report Templates */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Report Templates</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reportTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <template.icon className="h-8 w-8 text-primary" />
                  <div className="ml-4 flex-1">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="capitalize">
                      {template.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {template.frequency}
                    </span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Recent Reports</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentReports.map((report, index) => (
                <div key={report.id} className="p-4 flex items-center justify-between hover:bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Created on {new Date(report.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <Badge 
                        variant={report.status === 'completed' ? 'default' : 'secondary'}
                        className={report.status === 'completed' ? 'bg-success text-success-foreground' : ''}
                      >
                        {report.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {report.size}
                      </p>
                    </div>
                    {report.status === 'completed' && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}