import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, Target } from "lucide-react";
import { motion } from "framer-motion";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon: React.ReactNode;
  index: number;
}

function KPICard({ title, value, change, changeType, icon, index }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          {change !== undefined && (
            <div className="flex items-center text-xs mt-1">
              {changeType === 'increase' ? (
                <TrendingUp className="h-3 w-3 text-success mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive mr-1" />
              )}
              <span className={changeType === 'increase' ? 'text-success' : 'text-destructive'}>
                {Math.abs(change)}%
              </span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function KPICards() {
  const kpis = [
    {
      title: "Investors",
      value: 38,
      change: 8.2,
      changeType: 'increase' as const,
      icon: <Users className="h-4 w-4 text-primary" />
    },
    {
      title: "Invested",
      value: "12.3K",
      change: 15.4,
      changeType: 'increase' as const,
      icon: <DollarSign className="h-4 w-4 text-primary" />
    },
    {
      title: "Distributed",
      value: "2.1K",
      change: 3.2,
      changeType: 'increase' as const,
      icon: <TrendingUp className="h-4 w-4 text-primary" />
    },
    {
      title: "Redeemed All",
      value: "2.2K",
      change: -2.1,
      changeType: 'decrease' as const,
      icon: <Target className="h-4 w-4 text-primary" />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi, index) => (
        <KPICard key={kpi.title} {...kpi} index={index} />
      ))}
    </div>
  );
}