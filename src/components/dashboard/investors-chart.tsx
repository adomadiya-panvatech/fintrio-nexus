import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from "framer-motion";

const investorsData = [
  { name: 'Star Avenue Serenity', value: 78200, investors: 256, color: 'hsl(var(--chart-1))' },
  { name: 'Energy Campuses AI Data Center', value: 68900, investors: 189, color: 'hsl(var(--chart-2))' },
  { name: 'Westing House', value: 47500, investors: 167, color: 'hsl(var(--chart-3))' },
  { name: 'PITES Solution', value: 32000, investors: 134, color: 'hsl(var(--chart-4))' },
  { name: 'Others', value: 21000, investors: 98, color: 'hsl(var(--chart-5))' }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="12"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function InvestorsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Investors</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="year" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="year">Year</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
            </TabsList>
            <TabsContent value="year" className="mt-4">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-1/2">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={investorsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {investorsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value: any) => [`$${value.toLocaleString()}`, 'Investment']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full lg:w-1/2 space-y-2">
                  {investorsData.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="flex-1 truncate">{item.name}</span>
                      <span className="font-medium">{item.investors}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between font-medium">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        Invested
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        Distributed
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        Redeem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="month">
              <p className="text-center text-muted-foreground py-8">Monthly data view</p>
            </TabsContent>
            <TabsContent value="week">
              <p className="text-center text-muted-foreground py-8">Weekly data view</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}