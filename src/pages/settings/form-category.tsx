import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

const formCategories = [
  { id: 1, name: "Investment Forms", description: "Forms related to investments", count: 12 },
  { id: 2, name: "KYC Forms", description: "Know Your Customer documentation", count: 8 },
  { id: 3, name: "Compliance Forms", description: "Regulatory compliance forms", count: 6 },
  { id: 4, name: "Reporting Forms", description: "Financial reporting forms", count: 4 },
];

export default function FormCategoryPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Form Category</h1>
          <p className="text-muted-foreground">Manage form categories and classifications</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
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
                  <Input placeholder="Search categories..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center">Forms Count</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formCategories.map((category, index) => (
                  <motion.tr
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell className="text-muted-foreground">{category.description}</TableCell>
                    <TableCell className="text-center">{category.count}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}