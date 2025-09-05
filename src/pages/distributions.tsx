import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Filter, Plus, FileDown, Play } from "lucide-react";
import { mockDistributions } from "@/lib/mock-data";

export default function DistributionsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Distributions</h1>
          <p className="text-muted-foreground">Manage distribution runs</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Distribution
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search distributions..." className="pl-9" />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Offer Name</TableHead>
                    <TableHead className="text-right">Total Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Record Date</TableHead>
                    <TableHead>Pay Date</TableHead>
                    <TableHead className="text-center">Accounts</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDistributions.map((distribution, index) => (
                    <motion.tr
                      key={distribution.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="hover:bg-muted/50"
                    >
                      <TableCell className="text-muted-foreground">
                        {new Date(distribution.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">
                        {distribution.offerName}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${distribution.totalAmount.toLocaleString()}
                      </TableCell>
                      <TableCell className="capitalize">
                        {distribution.method.replace('_', ' ')}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={distribution.status === 'completed' ? 'default' : 'secondary'}
                          className={distribution.status === 'completed' ? 'bg-success text-success-foreground' : ''}
                        >
                          {distribution.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(distribution.recordDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(distribution.payDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-center">
                        {distribution.accountsCount}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Play className="h-4 w-4" />
                          Process
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}