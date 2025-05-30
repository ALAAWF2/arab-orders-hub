
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Eye, FileText, TrendingUp, Package, Clock, CheckCircle } from "lucide-react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [warehouseFilter, setWarehouseFilter] = useState("all");

  const stats = [
    {
      title: "إجمالي الطلبات",
      value: "342",
      icon: Package,
      color: "bg-blue-500"
    },
    {
      title: "الطلبات المرسلة",
      value: "245",
      icon: CheckCircle,
      color: "bg-green-500"
    },
    {
      title: "الطلبات المعلقة",
      value: "97",
      icon: Clock,
      color: "bg-orange-500"
    },
    {
      title: "نمو الطلبات",
      value: "+12%",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  const orders = [
    {
      id: "ORD-001",
      mall: "معرض النور",
      warehouse: "مستودع الرياض",
      userId: "user123",
      itemsCount: 5,
      totalAmount: "2,450",
      status: "معلق",
      timestamp: "2024-01-15 14:30",
      hasExtras: true,
      items: [
        { code: "P12345", name: "جهاز كمبيوتر محمول", alias: "لابتوب", qty: 2 },
        { code: "P12346", name: "هاتف ذكي", alias: "موبايل", qty: 3 }
      ]
    },
    {
      id: "ORD-002",
      mall: "معرض الشرق",
      warehouse: "مستودع جدة",
      userId: "user456",
      itemsCount: 3,
      totalAmount: "1,800",
      status: "مرسل",
      timestamp: "2024-01-15 12:15",
      hasExtras: false,
      items: [
        { code: "P12347", name: "ساعة ذكية", alias: "ساعة", qty: 1 },
        { code: "P12348", name: "سماعات لاسلكية", alias: "سماعات", qty: 2 }
      ]
    },
    {
      id: "ORD-003",
      mall: "معرض الغرب",
      warehouse: "مستودع الدمام",
      userId: "user789",
      itemsCount: 8,
      totalAmount: "3,200",
      status: "معلق",
      timestamp: "2024-01-14 16:45",
      hasExtras: true,
      items: [
        { code: "P12349", name: "كاميرا رقمية", alias: "كاميرا", qty: 1 },
        { code: "P12350", name: "طابعة ليزر", alias: "طابعة", qty: 1 }
      ]
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.mall.includes(searchTerm) ||
                         order.warehouse.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesWarehouse = warehouseFilter === "all" || order.warehouse.includes(warehouseFilter);
    
    return matchesSearch && matchesStatus && matchesWarehouse;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مرسل":
        return "bg-green-100 text-green-800";
      case "معلق":
        return "bg-orange-100 text-orange-800";
      case "ملغي":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">إدارة الطلبات</h1>
          <p className="text-xl text-gray-600">متابعة وإدارة جميع الطلبات الواردة</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filters */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">فلاتر البحث</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث برقم الطلب أو المعرض..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="حالة الطلب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="معلق">معلق</SelectItem>
                  <SelectItem value="مرسل">مرسل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>

              <Select value={warehouseFilter} onValueChange={setWarehouseFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="المستودع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المستودعات</SelectItem>
                  <SelectItem value="الرياض">مستودع الرياض</SelectItem>
                  <SelectItem value="جدة">مستودع جدة</SelectItem>
                  <SelectItem value="الدمام">مستودع الدمام</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-orange-500 hover:bg-orange-600">
                <FileText className="h-4 w-4 ml-2" />
                تصدير Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              قائمة الطلبات ({filteredOrders.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم الطلب</TableHead>
                    <TableHead className="text-right">المعرض</TableHead>
                    <TableHead className="text-right">المستودع</TableHead>
                    <TableHead className="text-right">عدد المنتجات</TableHead>
                    <TableHead className="text-right">المبلغ الإجمالي</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id} className="hover:bg-gray-50">
                      <TableCell className="font-mono text-blue-600 font-semibold">
                        {order.id}
                      </TableCell>
                      <TableCell className="font-medium">{order.mall}</TableCell>
                      <TableCell>{order.warehouse}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{order.itemsCount} منتج</Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-green-600">
                        {order.totalAmount} ر.س
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {order.timestamp}
                      </TableCell>
                      <TableCell>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 ml-1" />
                              عرض
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                            <SheetHeader>
                              <SheetTitle>تفاصيل الطلب {order.id}</SheetTitle>
                              <SheetDescription>
                                معلومات شاملة عن الطلب ومحتوياته
                              </SheetDescription>
                            </SheetHeader>
                            <div className="mt-6 space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-600">المعرض</label>
                                  <p className="text-sm font-semibold">{order.mall}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">المستودع</label>
                                  <p className="text-sm font-semibold">{order.warehouse}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">الحالة</label>
                                  <Badge className={getStatusColor(order.status)}>
                                    {order.status}
                                  </Badge>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-600">التاريخ</label>
                                  <p className="text-sm">{order.timestamp}</p>
                                </div>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium text-gray-600 mb-2 block">
                                  المنتجات المطلوبة
                                </label>
                                <div className="space-y-2">
                                  {order.items.map((item, index) => (
                                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                      <div className="flex justify-between items-center">
                                        <div>
                                          <p className="font-medium">{item.name}</p>
                                          <p className="text-sm text-gray-600">
                                            الرمز: {item.code} | المستعار: {item.alias}
                                          </p>
                                        </div>
                                        <Badge variant="outline">الكمية: {item.qty}</Badge>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex space-x-2 space-x-reverse">
                                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                                  تحديث إلى "مرسل"
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  تحميل PDF
                                </Button>
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Orders;
