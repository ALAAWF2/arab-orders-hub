
// بيانات المنتجات - يمكن تحديثها من ملف Excel عبر GitHub Actions
const data = [
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "إلكترونيات",
        code: "P12345",
        alias: "جهاز-لوحي-سامسونج",
        name: "جهاز لوحي سامسونج جالاكسي تاب A8",
        price: 899,
        stock: 25,
        sales: 150
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "إلكترونيات",
        code: "P12346",
        alias: "سماعات-ايربودز",
        name: "سماعات أبل ايربودز برو الجيل الثاني",
        price: 1199,
        stock: 40,
        sales: 89
    },
    {
        outlet: "مستودع جدة",
        category: "أجهزة منزلية",
        code: "P12347",
        alias: "خلاط-فيليبس",
        name: "خلاط فيليبس عالي الأداء 1200 واط",
        price: 299,
        stock: 15,
        sales: 45
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "ملابس",
        code: "P12348",
        alias: "قميص-قطني-ازرق",
        name: "قميص قطني أزرق مقاس كبير",
        price: 89,
        stock: 60,
        sales: 234
    },
    {
        outlet: "مستودع الدمام",
        category: "إلكترونيات",
        code: "P12349",
        alias: "شاحن-لاسلكي",
        name: "شاحن لاسلكي سريع 15 واط",
        price: 149,
        stock: 30,
        sales: 76
    },
    {
        outlet: "مستودع جدة",
        category: "أجهزة منزلية",
        code: "P12350",
        alias: "مكواة-بخار",
        name: "مكواة بخار تيفال 2400 واط",
        price: 179,
        stock: 20,
        sales: 67
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "كتب",
        code: "P12351",
        alias: "كتاب-ادارة-اعمال",
        name: "كتاب إدارة الأعمال الحديثة",
        price: 65,
        stock: 100,
        sales: 123
    },
    {
        outlet: "مستودع الدمام",
        category: "رياضة",
        code: "P12352",
        alias: "حذاء-رياضي-نايك",
        name: "حذاء رياضي نايك اير ماكس",
        price: 459,
        stock: 35,
        sales: 98
    },
    {
        outlet: "مستودع جدة",
        category: "مستحضرات تجميل",
        code: "P12353",
        alias: "كريم-مرطب-نيفيا",
        name: "كريم مرطب نيفيا للوجه والجسم",
        price: 35,
        stock: 80,
        sales: 189
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "إلكترونيات",
        code: "P12354",
        alias: "كاميرا-كانون",
        name: "كاميرا كانون EOS M50 مع عدسة 18-55",
        price: 2299,
        stock: 12,
        sales: 23
    },
    {
        outlet: "مستودع الدمام",
        category: "أجهزة منزلية",
        code: "P12355",
        alias: "مكنسة-كهربائية",
        name: "مكنسة كهربائية دايسون V11",
        price: 1899,
        stock: 8,
        sales: 34
    },
    {
        outlet: "مستودع جدة",
        category: "ملابس",
        code: "P12356",
        alias: "فستان-صيفي",
        name: "فستان صيفي قطني بألوان زاهية",
        price: 129,
        stock: 45,
        sales: 156
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "العاب",
        code: "P12357",
        alias: "لعبة-ليجو-سيتي",
        name: "لعبة ليجو سيتي محطة الشرطة",
        price: 199,
        stock: 25,
        sales: 87
    },
    {
        outlet: "مستودع الدمام",
        category: "مجوهرات",
        code: "P12358",
        alias: "ساعة-ذهبية",
        name: "ساعة يد ذهبية كلاسيكية",
        price: 799,
        stock: 18,
        sales: 45
    },
    {
        outlet: "مستودع جدة",
        category: "إلكترونيات",
        code: "P12359",
        alias: "شاشة-سامسونج-55",
        name: "شاشة سامسونج سمارت 55 بوصة 4K",
        price: 1799,
        stock: 6,
        sales: 29
    },
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "أجهزة منزلية",
        code: "P12360",
        alias: "غسالة-ال-جي",
        name: "غسالة ملابس LG 9 كيلو فول أوتوماتيك",
        price: 1299,
        stock: 10,
        sales: 56
    }
];

// إضافة منتجات بحالة نفاد المخزون للاختبار
data.push(
    {
        outlet: "مستودع الرياض الرئيسي",
        category: "إلكترونيات",
        code: "P12361",
        alias: "ايفون-15-برو",
        name: "ايفون 15 برو 256 جيجا",
        price: 4999,
        stock: 0,
        sales: 312
    },
    {
        outlet: "مستودع جدة",
        category: "ملابس",
        code: "P12362",
        alias: "جاكيت-شتوي",
        name: "جاكيت شتوي مقاوم للماء",
        price: 259,
        stock: 0,
        sales: 78
    }
);

// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { data };
}
