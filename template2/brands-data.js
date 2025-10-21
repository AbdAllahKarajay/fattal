// Brand Data Structure for Generic Brand Pages
const brandsData = {
    'bikrati': {
        id: 'bikrati',
        name: {
            en: 'Bikrati',
            ar: 'بيكراتي'
        },
        tagline: {
            en: 'Premium Bakery Products',
            ar: 'منتجات مخابز متميزة'
        },
        description: {
            en: 'Discover the finest selection of premium bakery products that bring the authentic taste of traditional baking to your table. Bikrati combines time-honored recipes with modern quality standards to deliver exceptional bakery goods.',
            ar: 'اكتشف أجود منتجات المخابز المتميزة التي تجلب الطعم الأصيل للخبز التقليدي إلى مائدتك. تجمع بيكراتي بين الوصفات التقليدية الأصيلة ومعايير الجودة الحديثة لتقديم منتجات مخابز استثنائية.'
        },
        logo: '../ماركاتنا/بيكراتي فاكتوري.svg',
        highlights: [
            {
                icon: 'fas fa-award',
                title: {
                    en: 'Quality Assured',
                    ar: 'ضمان الجودة'
                },
                description: {
                    en: 'International standards',
                    ar: 'معايير دولية'
                }
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Fresh Daily',
                    ar: 'طازج يومياً'
                },
                description: {
                    en: 'Made fresh every day',
                    ar: 'يُصنع طازجاً كل يوم'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Family Favorite',
                    ar: 'مفضل العائلة'
                },
                description: {
                    en: 'Trusted by families',
                    ar: 'موثوق من العائلات'
                }
            }
        ],
        quote: {
            text: {
                en: 'Baking is an art, and every Bikrati product is a masterpiece crafted with love and tradition.',
                ar: 'الخبز فن، وكل منتج من منتجات بيكراتي تحفة فنية مصنوعة بحب وتقليد.'
            },
            author: {
                en: '— Bikrati Philosophy',
                ar: '— فلسفة بيكراتي'
            }
        },
        features: [
            {
                icon: 'fas fa-wheat-awn',
                title: {
                    en: 'Premium Ingredients',
                    ar: 'مكونات متميزة'
                },
                description: {
                    en: 'We use only the finest, carefully selected ingredients sourced from trusted suppliers to ensure the highest quality in every product.',
                    ar: 'نستخدم فقط أجود المكونات المختارة بعناية من موردين موثوقين لضمان أعلى جودة في كل منتج.'
                }
            },
            {
                icon: 'fas fa-clock',
                title: {
                    en: 'Traditional Recipes',
                    ar: 'وصفات تقليدية'
                },
                description: {
                    en: 'Our products are made using time-tested traditional recipes that have been passed down through generations, ensuring authentic taste and quality.',
                    ar: 'منتجاتنا مصنوعة باستخدام وصفات تقليدية مجربة عبر الزمن تم تناقلها عبر الأجيال، مما يضمن الطعم الأصيل والجودة.'
                }
            },
            {
                icon: 'fas fa-shield-alt',
                title: {
                    en: 'Quality Assurance',
                    ar: 'ضمان الجودة'
                },
                description: {
                    en: 'Every product undergoes rigorous quality control processes to meet international standards and ensure customer satisfaction.',
                    ar: 'كل منتج يخضع لعمليات مراقبة جودة صارمة لتلبية المعايير الدولية وضمان رضا العملاء.'
                }
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Fresh Daily',
                    ar: 'طازج يومياً'
                },
                description: {
                    en: 'Our bakery products are made fresh daily using traditional baking methods to ensure maximum freshness and flavor.',
                    ar: 'منتجات المخابز لدينا تصنع طازجة يومياً باستخدام طرق الخبز التقليدية لضمان أقصى نضارة ونكهة.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-bread-slice',
                title: {
                    en: 'Fresh Bread',
                    ar: 'الخبز الطازج'
                },
                description: {
                    en: 'Traditional and modern bread varieties',
                    ar: 'أصناف الخبز التقليدية والحديثة'
                },
                items: [
                    {
                        en: 'White & Whole Wheat',
                        ar: 'أبيض وبر'
                    },
                    {
                        en: 'Sourdough & Artisan',
                        ar: 'خميرة طبيعية وحرفي'
                    },
                    {
                        en: 'Specialty Breads',
                        ar: 'خبز خاص'
                    }
                ]
            },
            {
                icon: 'fas fa-cookie',
                title: {
                    en: 'Cookies & Biscuits',
                    ar: 'البسكويت والكعك'
                },
                description: {
                    en: 'Sweet and savory baked treats',
                    ar: 'الحلويات والمخبوزات المالحة'
                },
                items: [
                    {
                        en: 'Chocolate Chip',
                        ar: 'رقائق الشوكولاتة'
                    },
                    {
                        en: 'Oatmeal & Nut',
                        ar: 'الشوفان والمكسرات'
                    },
                    {
                        en: 'Sugar & Butter',
                        ar: 'السكر والزبدة'
                    }
                ]
            },
            {
                icon: 'fas fa-birthday-cake',
                title: {
                    en: 'Cakes & Pastries',
                    ar: 'الكعك والمعجنات'
                },
                description: {
                    en: 'Celebration cakes and delicate pastries',
                    ar: 'كعك الاحتفالات والمعجنات الرقيقة'
                },
                items: [
                    {
                        en: 'Birthday Cakes',
                        ar: 'كعك أعياد الميلاد'
                    },
                    {
                        en: 'Wedding Cakes',
                        ar: 'كعك الأعراس'
                    },
                    {
                        en: 'Seasonal Specials',
                        ar: 'موسمية خاصة'
                    }
                ]
            },
            {
                icon: 'fas fa-croissant',
                title: {
                    en: 'Viennoiserie',
                    ar: 'المعجنات النمساوية'
                },
                description: {
                    en: 'Croissants, Danish pastries, and more',
                    ar: 'الكرواسان والمعجنات الدنماركية والمزيد'
                },
                items: [
                    {
                        en: 'Butter Croissants',
                        ar: 'كرواسان بالزبدة'
                    },
                    {
                        en: 'Danish Pastries',
                        ar: 'معجنات دنماركية'
                    },
                    {
                        en: 'Pain au Chocolat',
                        ar: 'خبز بالشوكولاتة'
                    }
                ]
            }
        ],
        stats: {
            years: '50+',
            products: '100+',
            customers: '1000+',
            founded: '1965'
        },
        contact: {
            phone: '+963 11 123 4567',
            email: 'bikrati@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'delovood': {
        id: 'delovood',
        name: {
            en: 'Delovood',
            ar: 'ديلوفوود'
        },
        tagline: {
            en: 'Natural Food Products',
            ar: 'منتجات غذائية طبيعية'
        },
        description: {
            en: 'Organic and natural food products that promote healthy living and sustainable practices. Delovood brings you the finest selection of natural ingredients and wholesome products for a better lifestyle.',
            ar: 'منتجات غذائية عضوية وطبيعية تعزز العيش الصحي والممارسات المستدامة. تجلب لك ديلوفوود أجود المكونات الطبيعية والمنتجات الصحية لنمط حياة أفضل.'
        },
        logo: '../ماركاتنا/delufood logo.svg',
        highlights: [
            {
                icon: 'fas fa-leaf',
                title: {
                    en: '100% Natural',
                    ar: 'طبيعي 100%'
                },
                description: {
                    en: 'Pure organic ingredients',
                    ar: 'مكونات عضوية نقية'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Healthy Living',
                    ar: 'عيش صحي'
                },
                description: {
                    en: 'Promotes wellness',
                    ar: 'يعزز الرفاهية'
                }
            },
            {
                icon: 'fas fa-globe',
                title: {
                    en: 'Sustainable',
                    ar: 'مستدام'
                },
                description: {
                    en: 'Eco-friendly practices',
                    ar: 'ممارسات صديقة للبيئة'
                }
            }
        ],
        quote: {
            text: {
                en: 'Nature provides the best ingredients for a healthy life.',
                ar: 'الطبيعة توفر أفضل المكونات لحياة صحية.'
            },
            author: {
                en: '— Delovood Philosophy',
                ar: '— فلسفة ديلوفوود'
            }
        },
        features: [
            {
                icon: 'fas fa-seedling',
                title: {
                    en: 'Organic Certification',
                    ar: 'شهادة عضوية'
                },
                description: {
                    en: 'All products are certified organic and meet the highest standards of natural food production.',
                    ar: 'جميع المنتجات معتمدة عضوياً وتلبي أعلى معايير إنتاج الأغذية الطبيعية.'
                }
            },
            {
                icon: 'fas fa-recycle',
                title: {
                    en: 'Sustainable Sourcing',
                    ar: 'مصادر مستدامة'
                },
                description: {
                    en: 'We source our ingredients from sustainable farms and suppliers committed to environmental responsibility.',
                    ar: 'نستورد مكوناتنا من مزارع وموردين مستدامين ملتزمين بالمسؤولية البيئية.'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Health Focused',
                    ar: 'مركز على الصحة'
                },
                description: {
                    en: 'Every product is designed to promote health and wellness for you and your family.',
                    ar: 'كل منتج مصمم لتعزيز الصحة والرفاهية لك ولعائلتك.'
                }
            },
            {
                icon: 'fas fa-award',
                title: {
                    en: 'Quality Guaranteed',
                    ar: 'ضمان الجودة'
                },
                description: {
                    en: 'Rigorous testing ensures every product meets our high standards for quality and purity.',
                    ar: 'الاختبارات الصارمة تضمن أن كل منتج يلبي معاييرنا العالية للجودة والنقاء.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-apple-alt',
                title: {
                    en: 'Organic Produce',
                    ar: 'منتجات عضوية'
                },
                description: {
                    en: 'Fresh organic fruits and vegetables',
                    ar: 'فواكه وخضروات عضوية طازجة'
                },
                items: [
                    {
                        en: 'Fresh Fruits',
                        ar: 'فواكه طازجة'
                    },
                    {
                        en: 'Organic Vegetables',
                        ar: 'خضروات عضوية'
                    },
                    {
                        en: 'Dried Fruits',
                        ar: 'فواكه مجففة'
                    }
                ]
            },
            {
                icon: 'fas fa-seedling',
                title: {
                    en: 'Natural Grains',
                    ar: 'حبوب طبيعية'
                },
                description: {
                    en: 'Whole grains and natural cereals',
                    ar: 'حبوب كاملة وحبوب طبيعية'
                },
                items: [
                    {
                        en: 'Whole Wheat',
                        ar: 'قمح كامل'
                    },
                    {
                        en: 'Organic Rice',
                        ar: 'أرز عضوي'
                    },
                    {
                        en: 'Natural Oats',
                        ar: 'شوفان طبيعي'
                    }
                ]
            },
            {
                icon: 'fas fa-jar',
                title: {
                    en: 'Natural Preserves',
                    ar: 'مربيات طبيعية'
                },
                description: {
                    en: 'Homemade-style preserves and spreads',
                    ar: 'مربيات ودهانات على الطريقة المنزلية'
                },
                items: [
                    {
                        en: 'Fruit Jams',
                        ar: 'مربى الفواكه'
                    },
                    {
                        en: 'Honey Products',
                        ar: 'منتجات العسل'
                    },
                    {
                        en: 'Natural Spreads',
                        ar: 'دهانات طبيعية'
                    }
                ]
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Herbal Products',
                    ar: 'منتجات عشبية'
                },
                description: {
                    en: 'Natural herbs and teas',
                    ar: 'أعشاب وشاي طبيعي'
                },
                items: [
                    {
                        en: 'Herbal Teas',
                        ar: 'شاي عشبي'
                    },
                    {
                        en: 'Dried Herbs',
                        ar: 'أعشاب مجففة'
                    },
                    {
                        en: 'Natural Spices',
                        ar: 'توابل طبيعية'
                    }
                ]
            }
        ],
        stats: {
            years: '25+',
            products: '50+',
            customers: '500+',
            founded: '1999'
        },
        contact: {
            phone: '+963 11 123 4568',
            email: 'delovood@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'fattal-food': {
        id: 'fattal-food',
        name: {
            en: 'Fattal Food',
            ar: 'فتال فوود'
        },
        tagline: {
            en: 'Quality Food Solutions',
            ar: 'حلول غذائية عالية الجودة'
        },
        description: {
            en: 'Comprehensive food solutions for every household need, from pantry staples to specialty items. Fattal Food offers a complete range of quality products to meet all your family\'s nutritional requirements.',
            ar: 'حلول غذائية شاملة لكل احتياجات المنزل، من المواد الأساسية إلى المنتجات الخاصة. تقدم فتال فوود مجموعة كاملة من المنتجات عالية الجودة لتلبية جميع احتياجات عائلتك الغذائية.'
        },
        logo: '../ماركاتنا/Fattal Food logo.svg',
        highlights: [
            {
                icon: 'fas fa-home',
                title: {
                    en: 'Complete Solutions',
                    ar: 'حلول شاملة'
                },
                description: {
                    en: 'Everything you need',
                    ar: 'كل ما تحتاجه'
                }
            },
            {
                icon: 'fas fa-star',
                title: {
                    en: 'Premium Quality',
                    ar: 'جودة متميزة'
                },
                description: {
                    en: 'Highest standards',
                    ar: 'أعلى المعايير'
                }
            },
            {
                icon: 'fas fa-users',
                title: {
                    en: 'Family Focused',
                    ar: 'مركز على العائلة'
                },
                description: {
                    en: 'For every family',
                    ar: 'لكل عائلة'
                }
            }
        ],
        quote: {
            text: {
                en: 'Quality food solutions for every family\'s needs.',
                ar: 'حلول غذائية عالية الجودة لكل احتياجات العائلة.'
            },
            author: {
                en: '— Fattal Food Mission',
                ar: '— مهمة فتال فوود'
            }
        },
        features: [
            {
                icon: 'fas fa-utensils',
                title: {
                    en: 'Complete Range',
                    ar: 'مجموعة كاملة'
                },
                description: {
                    en: 'From basic staples to gourmet specialties, we have everything your family needs.',
                    ar: 'من المواد الأساسية إلى الأطعمة الفاخرة، لدينا كل ما تحتاجه عائلتك.'
                }
            },
            {
                icon: 'fas fa-shipping-fast',
                title: {
                    en: 'Reliable Supply',
                    ar: 'إمداد موثوق'
                },
                description: {
                    en: 'Consistent availability of all products to ensure your pantry is always stocked.',
                    ar: 'توفر مستمر لجميع المنتجات لضمان أن مخزنك دائماً مليء.'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Family Values',
                    ar: 'قيم عائلية'
                },
                description: {
                    en: 'Products designed with families in mind, ensuring nutrition and satisfaction.',
                    ar: 'منتجات مصممة مع وضع العائلات في الاعتبار، تضمن التغذية والرضا.'
                }
            },
            {
                icon: 'fas fa-award',
                title: {
                    en: 'Trusted Brand',
                    ar: 'ماركة موثوقة'
                },
                description: {
                    en: 'Decades of experience in providing quality food solutions to Syrian families.',
                    ar: 'عقود من الخبرة في توفير حلول غذائية عالية الجودة للعائلات السورية.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-box',
                title: {
                    en: 'Pantry Staples',
                    ar: 'مواد أساسية'
                },
                description: {
                    en: 'Essential everyday food items',
                    ar: 'مواد غذائية أساسية يومية'
                },
                items: [
                    {
                        en: 'Rice & Grains',
                        ar: 'أرز وحبوب'
                    },
                    {
                        en: 'Cooking Oils',
                        ar: 'زيوت طبخ'
                    },
                    {
                        en: 'Basic Spices',
                        ar: 'توابل أساسية'
                    }
                ]
            },
            {
                icon: 'fas fa-cookie-bite',
                title: {
                    en: 'Snacks & Treats',
                    ar: 'وجبات خفيفة وحلويات'
                },
                description: {
                    en: 'Delicious snacks for all ages',
                    ar: 'وجبات خفيفة لذيذة لجميع الأعمار'
                },
                items: [
                    {
                        en: 'Crackers & Chips',
                        ar: 'بسكويت ورقائق'
                    },
                    {
                        en: 'Sweet Treats',
                        ar: 'حلويات'
                    },
                    {
                        en: 'Healthy Snacks',
                        ar: 'وجبات خفيفة صحية'
                    }
                ]
            },
            {
                icon: 'fas fa-wine-bottle',
                title: {
                    en: 'Beverages',
                    ar: 'مشروبات'
                },
                description: {
                    en: 'Refreshing drinks for every occasion',
                    ar: 'مشروبات منعشة لكل مناسبة'
                },
                items: [
                    {
                        en: 'Juices & Nectars',
                        ar: 'عصائر ونكتار'
                    },
                    {
                        en: 'Soft Drinks',
                        ar: 'مشروبات غازية'
                    },
                    {
                        en: 'Health Drinks',
                        ar: 'مشروبات صحية'
                    }
                ]
            },
            {
                icon: 'fas fa-fish',
                title: {
                    en: 'Canned Goods',
                    ar: 'معلبات'
                },
                description: {
                    en: 'Convenient preserved foods',
                    ar: 'أطعمة محفوظة مريحة'
                },
                items: [
                    {
                        en: 'Canned Vegetables',
                        ar: 'خضروات معلبة'
                    },
                    {
                        en: 'Canned Meats',
                        ar: 'لحوم معلبة'
                    },
                    {
                        en: 'Canned Fish',
                        ar: 'أسماك معلبة'
                    }
                ]
            }
        ],
        stats: {
            years: '30+',
            products: '200+',
            customers: '2000+',
            founded: '1994'
        },
        contact: {
            phone: '+963 11 123 4569',
            email: 'fattalfood@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'ingredient-world': {
        id: 'ingredient-world',
        name: {
            en: 'Ingredient World',
            ar: 'عالم المواد'
        },
        tagline: {
            en: 'Global Ingredients',
            ar: 'مكونات عالمية'
        },
        description: {
            en: 'Premium ingredients sourced from around the world to enhance your culinary experience. Ingredient World brings you the finest global ingredients to elevate your cooking and baking to new heights.',
            ar: 'مكونات متميزة مصدرة من جميع أنحاء العالم لتعزيز تجربتك الطهوية. يجلب لك عالم المواد أجود المكونات العالمية لرفع مستوى طبخك وخبزك إلى آفاق جديدة.'
        },
        logo: 'fas fa-seedling',
        // logo: '../ماركاتنا/Ingredient world - logo.svg',
        highlights: [
            {
                icon: 'fas fa-globe',
                title: {
                    en: 'Global Sourcing',
                    ar: 'مصادر عالمية'
                },
                description: {
                    en: 'From around the world',
                    ar: 'من جميع أنحاء العالم'
                }
            },
            {
                icon: 'fas fa-gem',
                title: {
                    en: 'Premium Quality',
                    ar: 'جودة متميزة'
                },
                description: {
                    en: 'Finest ingredients',
                    ar: 'أجود المكونات'
                }
            },
            {
                icon: 'fas fa-chef-hat',
                title: {
                    en: 'Chef Grade',
                    ar: 'درجة شيف'
                },
                description: {
                    en: 'Professional quality',
                    ar: 'جودة احترافية'
                }
            }
        ],
        quote: {
            text: {
                en: 'The world\'s finest ingredients for your culinary masterpieces.',
                ar: 'أجود مكونات العالم لتحفك الطهوية.'
            },
            author: {
                en: '— Ingredient World Promise',
                ar: '— وعد عالم المواد'
            }
        },
        features: [
            {
                icon: 'fas fa-globe-americas',
                title: {
                    en: 'Global Network',
                    ar: 'شبكة عالمية'
                },
                description: {
                    en: 'We source ingredients from the best producers around the world to ensure exceptional quality.',
                    ar: 'نستورد المكونات من أفضل المنتجين حول العالم لضمان جودة استثنائية.'
                }
            },
            {
                icon: 'fas fa-microscope',
                title: {
                    en: 'Quality Testing',
                    ar: 'اختبار الجودة'
                },
                description: {
                    en: 'Every ingredient undergoes rigorous testing to meet our high standards for purity and quality.',
                    ar: 'كل مكون يخضع لاختبارات صارمة لتلبية معاييرنا العالية للنقاء والجودة.'
                }
            },
            {
                icon: 'fas fa-shipping-fast',
                title: {
                    en: 'Fresh Delivery',
                    ar: 'توصيل طازج'
                },
                description: {
                    en: 'Careful handling and fast delivery ensure ingredients reach you in perfect condition.',
                    ar: 'التعامل الحذر والتوصيل السريع يضمن وصول المكونات إليك في حالة مثالية.'
                }
            },
            {
                icon: 'fas fa-book',
                title: {
                    en: 'Expert Knowledge',
                    ar: 'معرفة خبيرة'
                },
                description: {
                    en: 'Our team provides expert guidance on how to use these premium ingredients effectively.',
                    ar: 'فريقنا يقدم إرشادات خبيرة حول كيفية استخدام هذه المكونات المتميزة بفعالية.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-pepper-hot',
                title: {
                    en: 'Spices & Herbs',
                    ar: 'توابل وأعشاب'
                },
                description: {
                    en: 'Exotic spices and aromatic herbs',
                    ar: 'توابل غريبة وأعشاب عطرية'
                },
                items: [
                    {
                        en: 'Exotic Spices',
                        ar: 'توابل غريبة'
                    },
                    {
                        en: 'Dried Herbs',
                        ar: 'أعشاب مجففة'
                    },
                    {
                        en: 'Spice Blends',
                        ar: 'خلطات توابل'
                    }
                ]
            },
            {
                icon: 'fas fa-seedling',
                title: {
                    en: 'Specialty Grains',
                    ar: 'حبوب خاصة'
                },
                description: {
                    en: 'Rare and premium grains',
                    ar: 'حبوب نادرة ومتميزة'
                },
                items: [
                    {
                        en: 'Ancient Grains',
                        ar: 'حبوب قديمة'
                    },
                    {
                        en: 'Wild Rice',
                        ar: 'أرز بري'
                    },
                    {
                        en: 'Specialty Flours',
                        ar: 'دقيق خاص'
                    }
                ]
            },
            {
                icon: 'fas fa-wine-bottle',
                title: {
                    en: 'Culinary Oils',
                    ar: 'زيوت طهي'
                },
                description: {
                    en: 'Premium cooking oils and vinegars',
                    ar: 'زيوت طبخ متميزة وخلال'
                },
                items: [
                    {
                        en: 'Extra Virgin Oils',
                        ar: 'زيوت بكر ممتازة'
                    },
                    {
                        en: 'Truffle Oils',
                        ar: 'زيوت الكمأة'
                    },
                    {
                        en: 'Aged Vinegars',
                        ar: 'خلال معتقة'
                    }
                ]
            },
            {
                icon: 'fas fa-candy-cane',
                title: {
                    en: 'Sweet Ingredients',
                    ar: 'مكونات حلوة'
                },
                description: {
                    en: 'Premium sweeteners and flavorings',
                    ar: 'محليات ونكهات متميزة'
                },
                items: [
                    {
                        en: 'Artisan Honey',
                        ar: 'عسل حرفي'
                    },
                    {
                        en: 'Vanilla Beans',
                        ar: 'حبوب الفانيليا'
                    },
                    {
                        en: 'Chocolate Products',
                        ar: 'منتجات الشوكولاتة'
                    }
                ]
            }
        ],
        stats: {
            years: '15+',
            products: '300+',
            customers: '800+',
            founded: '2009'
        },
        contact: {
            phone: '+963 11 123 4570',
            email: 'ingredientworld@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'khayrat-blady': {
        id: 'khayrat-blady',
        name: {
            en: 'Khayrat Blady',
            ar: 'خيرات بلادي'
        },
        tagline: {
            en: 'Local Produce',
            ar: 'منتجات محلية'
        },
        description: {
            en: 'Supporting local farmers and producers with fresh, locally-sourced products. Khayrat Blady celebrates the rich agricultural heritage of Syria by bringing you the finest local produce.',
            ar: 'دعم المزارعين والمنتجين المحليين بمنتجات طازجة من مصادر محلية. تحتفل خيرات بلادي بالتراث الزراعي الغني لسوريا من خلال تقديم أجود المنتجات المحلية.'
        },
        logo: '../ماركاتنا/khayrat blady logo.svg',
        highlights: [
            {
                icon: 'fas fa-home',
                title: {
                    en: 'Local Support',
                    ar: 'دعم محلي'
                },
                description: {
                    en: 'Supporting communities',
                    ar: 'دعم المجتمعات'
                }
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Fresh & Natural',
                    ar: 'طازج وطبيعي'
                },
                description: {
                    en: 'Farm to table',
                    ar: 'من المزرعة إلى المائدة'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Heritage',
                    ar: 'تراث'
                },
                description: {
                    en: 'Preserving traditions',
                    ar: 'الحفاظ على التقاليد'
                }
            }
        ],
        quote: {
            text: {
                en: 'Celebrating the rich agricultural heritage of our homeland.',
                ar: 'الاحتفال بالتراث الزراعي الغني لوطننا.'
            },
            author: {
                en: '— Khayrat Blady Mission',
                ar: '— مهمة خيرات بلادي'
            }
        },
        features: [
            {
                icon: 'fas fa-tractor',
                title: {
                    en: 'Local Farmers',
                    ar: 'مزارعون محليون'
                },
                description: {
                    en: 'We work directly with local farmers to bring you the freshest produce while supporting local communities.',
                    ar: 'نعمل مباشرة مع المزارعين المحليين لتقديم أجود المنتجات الطازجة مع دعم المجتمعات المحلية.'
                }
            },
            {
                icon: 'fas fa-clock',
                title: {
                    en: 'Seasonal Fresh',
                    ar: 'طازج موسمي'
                },
                description: {
                    en: 'Our products follow natural seasons, ensuring you get the freshest produce at its peak quality.',
                    ar: 'منتجاتنا تتبع المواسم الطبيعية، مما يضمن حصولك على أجود المنتجات في ذروة جودتها.'
                }
            },
            {
                icon: 'fas fa-seedling',
                title: {
                    en: 'Traditional Methods',
                    ar: 'طرق تقليدية'
                },
                description: {
                    en: 'We preserve traditional farming and production methods that have been passed down through generations.',
                    ar: 'نحافظ على طرق الزراعة والإنتاج التقليدية التي تم تناقلها عبر الأجيال.'
                }
            },
            {
                icon: 'fas fa-award',
                title: {
                    en: 'Quality Assured',
                    ar: 'ضمان الجودة'
                },
                description: {
                    en: 'Every product is carefully selected and tested to ensure it meets our high standards for freshness and quality.',
                    ar: 'كل منتج يتم اختياره واختباره بعناية لضمان تلبية معاييرنا العالية للنضارة والجودة.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-apple-alt',
                title: {
                    en: 'Fresh Fruits',
                    ar: 'فواكه طازجة'
                },
                description: {
                    en: 'Seasonal fresh fruits from local orchards',
                    ar: 'فواكه طازجة موسمية من البساتين المحلية'
                },
                items: [
                    {
                        en: 'Citrus Fruits',
                        ar: 'فواكه حمضية'
                    },
                    {
                        en: 'Stone Fruits',
                        ar: 'فواكه ذات نواة'
                    },
                    {
                        en: 'Berries',
                        ar: 'توت'
                    }
                ]
            },
            {
                icon: 'fas fa-carrot',
                title: {
                    en: 'Fresh Vegetables',
                    ar: 'خضروات طازجة'
                },
                description: {
                    en: 'Crisp vegetables from local farms',
                    ar: 'خضروات مقرمشة من المزارع المحلية'
                },
                items: [
                    {
                        en: 'Leafy Greens',
                        ar: 'خضروات ورقية'
                    },
                    {
                        en: 'Root Vegetables',
                        ar: 'خضروات جذرية'
                    },
                    {
                        en: 'Nightshades',
                        ar: 'باذنجانيات'
                    }
                ]
            },
            {
                icon: 'fas fa-wheat-awn',
                title: {
                    en: 'Grains & Legumes',
                    ar: 'حبوب وبقوليات'
                },
                description: {
                    en: 'Traditional grains and legumes',
                    ar: 'حبوب وبقوليات تقليدية'
                },
                items: [
                    {
                        en: 'Wheat Varieties',
                        ar: 'أصناف القمح'
                    },
                    {
                        en: 'Lentils & Beans',
                        ar: 'عدس وفاصوليا'
                    },
                    {
                        en: 'Barley & Oats',
                        ar: 'شعير وشوفان'
                    }
                ]
            },
            {
                icon: 'fas fa-jar',
                title: {
                    en: 'Preserved Goods',
                    ar: 'منتجات محفوظة'
                },
                description: {
                    en: 'Traditional preserved foods',
                    ar: 'أطعمة محفوظة تقليدية'
                },
                items: [
                    {
                        en: 'Pickled Vegetables',
                        ar: 'خضروات مخللة'
                    },
                    {
                        en: 'Dried Fruits',
                        ar: 'فواكه مجففة'
                    },
                    {
                        en: 'Traditional Jams',
                        ar: 'مربيات تقليدية'
                    }
                ]
            }
        ],
        stats: {
            years: '20+',
            products: '80+',
            customers: '600+',
            founded: '2004'
        },
        contact: {
            phone: '+963 11 123 4571',
            email: 'khayratblady@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'fattal-dairy': {
        id: 'fattal-dairy',
        name: {
            en: 'Fattal Dairy',
            ar: 'فتال ديري'
        },
        tagline: {
            en: 'Dairy Products',
            ar: 'منتجات الألبان'
        },
        description: {
            en: 'Fresh dairy products that provide essential nutrition for the whole family. Fattal Dairy offers a complete range of high-quality dairy products made with care and tradition.',
            ar: 'منتجات ألبان طازجة توفر التغذية الأساسية للعائلة بأكملها. تقدم فتال ديري مجموعة كاملة من منتجات الألبان عالية الجودة المصنوعة بعناية وتقليد.'
        },
        logo: 'fas fa-cheese',
        highlights: [
            {
                icon: 'fas fa-milk',
                title: {
                    en: 'Fresh Daily',
                    ar: 'طازج يومياً'
                },
                description: {
                    en: 'Made fresh every day',
                    ar: 'يُصنع طازجاً كل يوم'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Family Nutrition',
                    ar: 'تغذية العائلة'
                },
                description: {
                    en: 'Essential nutrition',
                    ar: 'تغذية أساسية'
                }
            },
            {
                icon: 'fas fa-award',
                title: {
                    en: 'Quality Assured',
                    ar: 'ضمان الجودة'
                },
                description: {
                    en: 'Highest standards',
                    ar: 'أعلى المعايير'
                }
            }
        ],
        quote: {
            text: {
                en: 'Pure dairy products for healthy families.',
                ar: 'منتجات ألبان نقية للعائلات الصحية.'
            },
            author: {
                en: '— Fattal Dairy Promise',
                ar: '— وعد فتال ديري'
            }
        },
        features: [
            {
                icon: 'fas fa-microscope',
                title: {
                    en: 'Quality Control',
                    ar: 'مراقبة الجودة'
                },
                description: {
                    en: 'Rigorous testing ensures every dairy product meets the highest standards for safety and quality.',
                    ar: 'الاختبارات الصارمة تضمن أن كل منتج ألبان يلبي أعلى معايير السلامة والجودة.'
                }
            },
            {
                icon: 'fas fa-truck',
                title: {
                    en: 'Cold Chain',
                    ar: 'سلسلة تبريد'
                },
                description: {
                    en: 'Maintaining proper temperature throughout the supply chain to ensure maximum freshness.',
                    ar: 'الحفاظ على درجة الحرارة المناسبة طوال سلسلة التوريد لضمان أقصى نضارة.'
                }
            },
            {
                icon: 'fas fa-users',
                title: {
                    en: 'Family Focused',
                    ar: 'مركز على العائلة'
                },
                description: {
                    en: 'Products designed to meet the nutritional needs of every family member, from children to adults.',
                    ar: 'منتجات مصممة لتلبية الاحتياجات الغذائية لكل فرد في العائلة، من الأطفال إلى البالغين.'
                }
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Natural Process',
                    ar: 'عملية طبيعية'
                },
                description: {
                    en: 'Using traditional methods and natural processes to create wholesome dairy products.',
                    ar: 'استخدام الطرق التقليدية والعمليات الطبيعية لإنشاء منتجات ألبان صحية.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-milk',
                title: {
                    en: 'Fresh Milk',
                    ar: 'حليب طازج'
                },
                description: {
                    en: 'Fresh milk in various sizes',
                    ar: 'حليب طازج بأحجام مختلفة'
                },
                items: [
                    {
                        en: 'Whole Milk',
                        ar: 'حليب كامل الدسم'
                    },
                    {
                        en: 'Low Fat Milk',
                        ar: 'حليب قليل الدسم'
                    },
                    {
                        en: 'Skim Milk',
                        ar: 'حليب خالي الدسم'
                    }
                ]
            },
            {
                icon: 'fas fa-cheese',
                title: {
                    en: 'Cheese Products',
                    ar: 'منتجات الجبن'
                },
                description: {
                    en: 'Variety of fresh and aged cheeses',
                    ar: 'مجموعة متنوعة من الأجبان الطازجة والمعتقة'
                },
                items: [
                    {
                        en: 'Fresh Cheese',
                        ar: 'جبن طازج'
                    },
                    {
                        en: 'Aged Cheese',
                        ar: 'جبن معتق'
                    },
                    {
                        en: 'Processed Cheese',
                        ar: 'جبن معالج'
                    }
                ]
            },
            {
                icon: 'fas fa-ice-cream',
                title: {
                    en: 'Yogurt & Desserts',
                    ar: 'زبادي وحلويات'
                },
                description: {
                    en: 'Creamy yogurts and dairy desserts',
                    ar: 'زبادي كريمي وحلويات ألبان'
                },
                items: [
                    {
                        en: 'Natural Yogurt',
                        ar: 'زبادي طبيعي'
                    },
                    {
                        en: 'Flavored Yogurt',
                        ar: 'زبادي بنكهات'
                    },
                    {
                        en: 'Dairy Desserts',
                        ar: 'حلويات ألبان'
                    }
                ]
            },
            {
                icon: 'fas fa-butter',
                title: {
                    en: 'Butter & Cream',
                    ar: 'زبدة وكريمة'
                },
                description: {
                    en: 'Rich butter and cream products',
                    ar: 'منتجات زبدة وكريمة غنية'
                },
                items: [
                    {
                        en: 'Fresh Butter',
                        ar: 'زبدة طازجة'
                    },
                    {
                        en: 'Whipping Cream',
                        ar: 'كريمة خفق'
                    },
                    {
                        en: 'Sour Cream',
                        ar: 'كريمة حامضة'
                    }
                ]
            }
        ],
        stats: {
            years: '35+',
            products: '60+',
            customers: '1500+',
            founded: '1989'
        },
        contact: {
            phone: '+963 11 123 4572',
            email: 'fattaldairy@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'delobar': {
        id: 'delobar',
        name: {
            en: 'Delobar',
            ar: 'ديلوبار'
        },
        tagline: {
            en: 'Confectionery',
            ar: 'الحلويات'
        },
        description: {
            en: 'Sweet treats and confectionery products that bring joy to every occasion. Delobar creates delightful confections that satisfy your sweet tooth with premium ingredients and traditional recipes.',
            ar: 'حلويات ومعجنات حلوة تجلب الفرح لكل مناسبة. يخلق ديلوبار حلويات لذيذة ترضي رغبتك في الحلويات بمكونات متميزة ووصفات تقليدية.'
        },
        logo: 'fas fa-candy-cane',
        highlights: [
            {
                icon: 'fas fa-candy-cane',
                title: {
                    en: 'Sweet Delights',
                    ar: 'حلويات لذيذة'
                },
                description: {
                    en: 'Irresistible treats',
                    ar: 'حلويات لا تُقاوم'
                }
            },
            {
                icon: 'fas fa-birthday-cake',
                title: {
                    en: 'Special Occasions',
                    ar: 'مناسبات خاصة'
                },
                description: {
                    en: 'Perfect for celebrations',
                    ar: 'مثالية للاحتفالات'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Made with Love',
                    ar: 'مصنوع بحب'
                },
                description: {
                    en: 'Crafted with care',
                    ar: 'مصنوع بعناية'
                }
            }
        ],
        quote: {
            text: {
                en: 'Life is sweet with Delobar confections.',
                ar: 'الحياة حلوة مع حلويات ديلوبار.'
            },
            author: {
                en: '— Delobar Philosophy',
                ar: '— فلسفة ديلوبار'
            }
        },
        features: [
            {
                icon: 'fas fa-gem',
                title: {
                    en: 'Premium Ingredients',
                    ar: 'مكونات متميزة'
                },
                description: {
                    en: 'We use only the finest ingredients to create our delicious confections, ensuring exceptional taste and quality.',
                    ar: 'نستخدم فقط أجود المكونات لإنشاء حلوياتنا اللذيذة، مما يضمن طعم وجودة استثنائية.'
                }
            },
            {
                icon: 'fas fa-palette',
                title: {
                    en: 'Artisan Crafted',
                    ar: 'مصنوع حرفياً'
                },
                description: {
                    en: 'Each confection is carefully crafted by skilled artisans using traditional techniques and modern innovation.',
                    ar: 'كل حلوية مصنوعة بعناية من قبل حرفيين مهرة باستخدام التقنيات التقليدية والابتكار الحديث.'
                }
            },
            {
                icon: 'fas fa-gift',
                title: {
                    en: 'Perfect Gifts',
                    ar: 'هدايا مثالية'
                },
                description: {
                    en: 'Our beautifully packaged confections make perfect gifts for any special occasion or celebration.',
                    ar: 'حلوياتنا المعبأة بشكل جميل تصنع هدايا مثالية لأي مناسبة خاصة أو احتفال.'
                }
            },
            {
                icon: 'fas fa-star',
                title: {
                    en: 'Variety & Innovation',
                    ar: 'تنوع وابتكار'
                },
                description: {
                    en: 'We continuously innovate to bring you new flavors and varieties while maintaining our commitment to quality.',
                    ar: 'نبتكر باستمرار لتقديم نكهات وأصناف جديدة مع الحفاظ على التزامنا بالجودة.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-candy-cane',
                title: {
                    en: 'Hard Candies',
                    ar: 'حلويات صلبة'
                },
                description: {
                    en: 'Classic hard candies in various flavors',
                    ar: 'حلويات صلبة كلاسيكية بنكهات متنوعة'
                },
                items: [
                    {
                        en: 'Fruit Flavors',
                        ar: 'نكهات فواكه'
                    },
                    {
                        en: 'Mint Varieties',
                        ar: 'أصناف النعناع'
                    },
                    {
                        en: 'Traditional Flavors',
                        ar: 'نكهات تقليدية'
                    }
                ]
            },
            {
                icon: 'fas fa-cookie',
                title: {
                    en: 'Chocolates',
                    ar: 'شوكولاتة'
                },
                description: {
                    en: 'Rich and creamy chocolate confections',
                    ar: 'حلويات شوكولاتة غنية وكريمية'
                },
                items: [
                    {
                        en: 'Milk Chocolate',
                        ar: 'شوكولاتة بالحليب'
                    },
                    {
                        en: 'Dark Chocolate',
                        ar: 'شوكولاتة داكنة'
                    },
                    {
                        en: 'White Chocolate',
                        ar: 'شوكولاتة بيضاء'
                    }
                ]
            },
            {
                icon: 'fas fa-birthday-cake',
                title: {
                    en: 'Gummy Treats',
                    ar: 'حلويات جيلاتينية'
                },
                description: {
                    en: 'Chewy and fruity gummy candies',
                    ar: 'حلويات جيلاتينية مطاطية وفواكه'
                },
                items: [
                    {
                        en: 'Fruit Shapes',
                        ar: 'أشكال فواكه'
                    },
                    {
                        en: 'Animal Shapes',
                        ar: 'أشكال حيوانات'
                    },
                    {
                        en: 'Sour Varieties',
                        ar: 'أصناف حامضة'
                    }
                ]
            },
            {
                icon: 'fas fa-gift',
                title: {
                    en: 'Gift Sets',
                    ar: 'مجموعات هدايا'
                },
                description: {
                    en: 'Beautifully packaged gift collections',
                    ar: 'مجموعات هدايا معبأة بشكل جميل'
                },
                items: [
                    {
                        en: 'Holiday Collections',
                        ar: 'مجموعات الأعياد'
                    },
                    {
                        en: 'Seasonal Specials',
                        ar: 'موسمية خاصة'
                    },
                    {
                        en: 'Custom Mixes',
                        ar: 'خلطات مخصصة'
                    }
                ]
            }
        ],
        stats: {
            years: '25+',
            products: '120+',
            customers: '1000+',
            founded: '1999'
        },
        contact: {
            phone: '+963 11 123 4573',
            email: 'delobar@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    },
    'vita-duro': {
        id: 'vita-duro',
        name: {
            en: 'Vita Duro',
            ar: 'فيتا دورو'
        },
        tagline: {
            en: 'Fresh Produce',
            ar: 'منتجات طازجة'
        },
        description: {
            en: 'Fresh and nutritious produce that brings the goodness of nature to your table. Vita Duro delivers the finest selection of fresh fruits and vegetables to ensure your family gets the best nutrition.',
            ar: 'منتجات طازجة ومغذية تجلب خير الطبيعة إلى مائدتك. يقدم فيتا دورو أجود مجموعة من الفواكه والخضروات الطازجة لضمان حصول عائلتك على أفضل تغذية.'
        },
        logo: 'fas fa-apple-alt',
        highlights: [
            {
                icon: 'fas fa-apple-alt',
                title: {
                    en: 'Fresh Daily',
                    ar: 'طازج يومياً'
                },
                description: {
                    en: 'Picked at peak ripeness',
                    ar: 'يُقطف في ذروة النضج'
                }
            },
            {
                icon: 'fas fa-heart',
                title: {
                    en: 'Nutritious',
                    ar: 'مغذي'
                },
                description: {
                    en: 'Rich in vitamins',
                    ar: 'غني بالفيتامينات'
                }
            },
            {
                icon: 'fas fa-leaf',
                title: {
                    en: 'Natural',
                    ar: 'طبيعي'
                },
                description: {
                    en: 'Pure and wholesome',
                    ar: 'نقي وصحي'
                }
            }
        ],
        quote: {
            text: {
                en: 'Nature\'s finest gifts for your family\'s health.',
                ar: 'أجود هدايا الطبيعة لصحة عائلتك.'
            },
            author: {
                en: '— Vita Duro Promise',
                ar: '— وعد فيتا دورو'
            }
        },
        features: [
            {
                icon: 'fas fa-truck',
                title: {
                    en: 'Fast Delivery',
                    ar: 'توصيل سريع'
                },
                description: {
                    en: 'Quick delivery from farm to your table ensures maximum freshness and nutritional value.',
                    ar: 'التوصيل السريع من المزرعة إلى مائدتك يضمن أقصى نضارة وقيمة غذائية.'
                }
            },
            {
                icon: 'fas fa-microscope',
                title: {
                    en: 'Quality Control',
                    ar: 'مراقبة الجودة'
                },
                description: {
                    en: 'Rigorous quality checks ensure every piece of produce meets our high standards for freshness and safety.',
                    ar: 'فحوصات جودة صارمة تضمن أن كل قطعة من المنتجات تلبي معاييرنا العالية للنضارة والسلامة.'
                }
            },
            {
                icon: 'fas fa-calendar-alt',
                title: {
                    en: 'Seasonal Selection',
                    ar: 'اختيار موسمي'
                },
                description: {
                    en: 'We carefully select produce based on natural seasons to bring you the best quality and flavor.',
                    ar: 'نختار المنتجات بعناية بناءً على المواسم الطبيعية لتقديم أفضل جودة ونكهة.'
                }
            },
            {
                icon: 'fas fa-users',
                title: {
                    en: 'Family Health',
                    ar: 'صحة العائلة'
                },
                description: {
                    en: 'Every product is chosen with your family\'s health and nutrition in mind.',
                    ar: 'كل منتج يتم اختياره مع وضع صحة وتغذية عائلتك في الاعتبار.'
                }
            }
        ],
        productCategories: [
            {
                icon: 'fas fa-apple-alt',
                title: {
                    en: 'Fresh Fruits',
                    ar: 'فواكه طازجة'
                },
                description: {
                    en: 'Seasonal fresh fruits from local and international sources',
                    ar: 'فواكه طازجة موسمية من مصادر محلية ودولية'
                },
                items: [
                    {
                        en: 'Tropical Fruits',
                        ar: 'فواكه استوائية'
                    },
                    {
                        en: 'Citrus Fruits',
                        ar: 'فواكه حمضية'
                    },
                    {
                        en: 'Stone Fruits',
                        ar: 'فواكه ذات نواة'
                    }
                ]
            },
            {
                icon: 'fas fa-carrot',
                title: {
                    en: 'Fresh Vegetables',
                    ar: 'خضروات طازجة'
                },
                description: {
                    en: 'Crisp and nutritious vegetables for every meal',
                    ar: 'خضروات مقرمشة ومغذية لكل وجبة'
                },
                items: [
                    {
                        en: 'Leafy Greens',
                        ar: 'خضروات ورقية'
                    },
                    {
                        en: 'Root Vegetables',
                        ar: 'خضروات جذرية'
                    },
                    {
                        en: 'Nightshades',
                        ar: 'باذنجانيات'
                    }
                ]
            },
            {
                icon: 'fas fa-seedling',
                title: {
                    en: 'Organic Options',
                    ar: 'خيارات عضوية'
                },
                description: {
                    en: 'Certified organic produce for health-conscious families',
                    ar: 'منتجات عضوية معتمدة للعائلات المهتمة بالصحة'
                },
                items: [
                    {
                        en: 'Organic Fruits',
                        ar: 'فواكه عضوية'
                    },
                    {
                        en: 'Organic Vegetables',
                        ar: 'خضروات عضوية'
                    },
                    {
                        en: 'Organic Herbs',
                        ar: 'أعشاب عضوية'
                    }
                ]
            },
            {
                icon: 'fas fa-gift',
                title: {
                    en: 'Gift Baskets',
                    ar: 'سلال هدايا'
                },
                description: {
                    en: 'Beautifully arranged fruit and vegetable gift baskets',
                    ar: 'سلال هدايا من الفواكه والخضروات مرتبة بشكل جميل'
                },
                items: [
                    {
                        en: 'Holiday Baskets',
                        ar: 'سلال الأعياد'
                    },
                    {
                        en: 'Seasonal Collections',
                        ar: 'مجموعات موسمية'
                    },
                    {
                        en: 'Custom Arrangements',
                        ar: 'ترتيبات مخصصة'
                    }
                ]
            }
        ],
        stats: {
            years: '18+',
            products: '90+',
            customers: '700+',
            founded: '2006'
        },
        contact: {
            phone: '+963 11 123 4574',
            email: 'vitaduro@fattalgroup.com',
            hours: {
                en: 'Mon-Fri: 8AM-6PM',
                ar: 'الاثنين-الجمعة: 8ص-6م'
            }
        }
    }
};
             