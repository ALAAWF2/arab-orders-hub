
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, TrendingUp, Users, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    {
      title: "إجمالي المنتجات",
      value: "1,234",
      icon: Package,
      color: "bg-blue-500",
      change: "+12%"
    },
    {
      title: "إجمالي الطلبات",
      value: "567",
      icon: ShoppingCart,
      color: "bg-green-500",
      change: "+8%"
    },
    {
      title: "المبيعات",
      value: "89,432 ر.س",
      icon: TrendingUp,
      color: "bg-orange-500",
      change: "+15%"
    },
    {
      title: "العملاء",
      value: "342",
      icon: Users,
      color: "bg-purple-500",
      change: "+5%"
    }
  ];

  const recentProducts = [
    { id: "P12345", name: "جهاز كمبيوتر محمول", category: "إلكترونيات", price: "2,500", stock: 15 },
    { id: "P12346", name: "هاتف ذكي", category: "إلكترونيات", price: "1,800", stock: 8 },
    { id: "P12347", name: "ساعة ذكية", category: "إكسسوارات", price: "650", stock: 22 },
    { id: "P12348", name: "سماعات لاسلكية", category: "إكسسوارات", price: "320", stock: 35 }
  ];

  const quickActions = [
    { title: "إضافة منتج جديد", icon: Plus, color: "bg-blue-500", href: "/products/new" },
    { title: "البحث في المنتجات", icon: Search, color: "bg-green-500", href: "/products/search" },
    { title: "إدارة الطلبات", icon: ShoppingCart, color: "bg-orange-500", href: "/orders" },
    { title: "إدارة العملاء", icon: Users, color: "bg-purple-500", href: "/customers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            نظام إدارة المنتجات والطلبات
          </h1>
          <p className="text-xl text-gray-600">
            مرحباً بك في نظام إدارة شامل للمعارض والمستودعات
          </p>
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
                      <Badge variant="secondary" className="text-green-600 bg-green-100">
                        {stat.change}
                      </Badge>
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

        {/* Quick Actions */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">الإجراءات السريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-24 flex flex-col space-y-2 hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-300"
                    asChild
                  >
                    <Link to={action.href}>
                      <div className={`${action.color} p-2 rounded-lg`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium">{action.title}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Products */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">المنتجات الحديثة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-right p-3 font-medium text-gray-600">الرمز</th>
                    <th className="text-right p-3 font-medium text-gray-600">اسم المنتج</th>
                    <th className="text-right p-3 font-medium text-gray-600">الفئة</th>
                    <th className="text-right p-3 font-medium text-gray-600">السعر (ر.س)</th>
                    <th className="text-right p-3 font-medium text-gray-600">المخزون</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-3 font-mono text-blue-600">{product.id}</td>
                      <td className="p-3 font-medium">{product.name}</td>
                      <td className="p-3">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="p-3 font-semibold text-green-600">{product.price}</td>
                      <td className="p-3">
                        <Badge 
                          variant={product.stock > 20 ? "default" : product.stock > 10 ? "secondary" : "destructive"}
                        >
                          {product.stock}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>نظام إدارة المنتجات والطلبات - حل شامل للمعارض والمستودعات 🏪✨</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
