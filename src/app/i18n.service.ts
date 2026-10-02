import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'zh' | 'hi';

const translations: Record<string, Record<Language, string>> = {
  'news.pageTitle': { en: 'News', zh: '新闻', hi: 'समाचार' },
  'news.listSummary': { en: 'Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.', zh: '太妃糖甜面包、焦糖燕麦蛋糕、柠檬糖、纸杯蛋糕与冰淇淋。', hi: 'टॉफ़ी स्वीट रोल, कारमेल ओट केक, लेमन ड्रॉप्स, कपकेक और आइसक्रीम।' },
  'contactPage.title': { en: 'Contact Us', zh: '联系我们', hi: 'संपर्क करें' },
  'contactPage.home': { en: 'Home', zh: '首页', hi: 'होम' },
  'contactPage.introA': { en: 'Interested in our', zh: '您对我们的', hi: 'हमारी' },
  'contactPage.introHighlight': { en: 'Machine & Software', zh: '机器与软件', hi: 'मशीन और सॉफ़्टवेयर' },
  'contactPage.introB': { en: 'services or need advice? Then please get in touch and we’ll be glad to help.', zh: '服务感兴趣或需要建议？欢迎联系我们，我们很乐意为您提供帮助。', hi: 'सेवाओं में रुचि है या सलाह चाहिए? हमसे संपर्क करें, हमें मदद करके खुशी होगी।' },
  'contactPage.information': { en: 'Contact Informations', zh: '联系信息', hi: 'संपर्क जानकारी' },
  'contactPage.informationSub': { en: 'Get in touch and let us know how we can help', zh: '请联系我们，告诉我们如何为您提供帮助', hi: 'हमसे संपर्क करें और बताएं कि हम कैसे मदद कर सकते हैं' },
  'contactPage.phone': { en: 'Phone', zh: '电话', hi: 'फ़ोन' },
  'contactPage.mail': { en: 'Mail', zh: '邮箱', hi: 'ईमेल' },
  'contactPage.address': { en: 'Address', zh: '地址', hi: 'पता' },
  'contactPage.direction': { en: 'Get Direction', zh: '获取路线', hi: 'दिशा-निर्देश' },
  'contactPage.seeMap': { en: 'See on Map', zh: '在地图上查看', hi: 'मैप पर देखें' },
  'contactPage.support': { en: 'Technical Support', zh: '技术支持', hi: 'तकनीकी सहायता' },
  'contactPage.supportSub': { en: 'You can reach our technical support team 24/7', zh: '您可以全天候联系技术支持团队', hi: 'आप हमारी तकनीकी सहायता टीम से 24/7 संपर्क कर सकते हैं' },
  'contactPage.supportPhone': { en: 'Support Phone', zh: '支持电话', hi: 'सहायता फ़ोन' },
  'contactPage.supportMail': { en: 'Support Mail', zh: '支持邮箱', hi: 'सहायता ईमेल' },
  'contactPage.requestForm': { en: 'Support Request Form', zh: '支持请求表单', hi: 'सहायता अनुरोध फ़ॉर्म' },
  'contactPage.requestText': { en: 'Caramels cake marshmallow cheesecake shortbread soufflé', zh: '如需帮助，请通过请求表单联系我们的支持团队。', hi: 'सहायता के लिए अनुरोध फ़ॉर्म के माध्यम से हमारी टीम से संपर्क करें।' },
  'contactPage.request': { en: 'Request Form', zh: '提交请求', hi: 'अनुरोध फ़ॉर्म' },
  'contactPage.survey': { en: 'Satisfaction Survey', zh: '满意度调查', hi: 'संतुष्टि सर्वेक्षण' },
  'contactPage.surveySub': { en: 'Use the "Service Evaluation" code to make an evaluation', zh: '使用“服务评估”代码提交评价', hi: 'मूल्यांकन देने के लिए "Service Evaluation" कोड का उपयोग करें' },
  'contactPage.codeQuestion': { en: 'Where is my code?', zh: '我的代码在哪里？', hi: 'मेरा कोड कहाँ है?' },
  'contactPage.codeAnswer': { en: 'The Service Evaluation code will be provided after the service is performed by the technical team.', zh: '技术团队完成服务后，会向您提供服务评估代码。', hi: 'तकनीकी टीम द्वारा सेवा पूरी होने के बाद आपको मूल्यांकन कोड दिया जाएगा।' },
  'contactPage.rate': { en: 'Rate Us', zh: '评价我们', hi: 'हमें रेट करें' },
  'services.title': { en: 'Services', zh: '服务', hi: 'सेवाएँ' },
  'services.home': { en: 'Home', zh: '首页', hi: 'होम' },
  'services.overviewTitle': { en: 'Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the possibility of malfunction are very low.', zh: '我们的机器按照严苛的运行条件制造，可全天候运行，因此发生故障的可能性很低。', hi: 'हमारी मशीनें कठिन परिचालन स्थितियों और 24/7 उपयोग के अनुरूप बनाई जाती हैं, इसलिए खराबी की संभावना बहुत कम है।' },
  'services.overviewText': { en: 'Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.', zh: 'Crosson 提供专业的服务与支持，帮助客户维持设备稳定运行并提升生产效率。我们的团队在设备维护、软件与技术支持方面拥有丰富经验。', hi: 'Crosson की सेवाएँ और सहायता ग्राहकों को मशीनों का भरोसेमंद संचालन बनाए रखने और उत्पादन क्षमता बढ़ाने में मदद करती हैं। हमारी टीम रखरखाव, सॉफ़्टवेयर और तकनीकी सहायता में अनुभवी है।' },
  'services.check1': { en: 'Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.', zh: '专业团队提供及时的现场服务与支持。', hi: 'विशेषज्ञ टीम समय पर साइट सेवा और सहायता देती है।' },
  'services.check2': { en: 'Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet.', zh: '我们帮助客户保持生产线稳定、高效运行。', hi: 'हम उत्पादन लाइनों को स्थिर और कुशल बनाए रखने में मदद करते हैं।' },
  'services.check3': { en: 'Donut pastry apple pie ice cream dragée cheesecake.', zh: '持续改进设备、软件与服务。', hi: 'मशीनों, सॉफ़्टवेयर और सेवाओं में लगातार सुधार।' },
  'services.explore': { en: 'Explore Services', zh: '探索服务', hi: 'सेवाएँ देखें' },
  'services.heading': { en: 'We offer high quality machine manufacturing and software services.', zh: '我们提供高品质的机器制造与软件服务。', hi: 'हम उच्च गुणवत्ता वाली मशीन निर्माण और सॉफ़्टवेयर सेवाएँ प्रदान करते हैं।' },
  'services.description': { en: 'To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.', zh: '我们致力于成为行业领先、充满活力的企业，以持续改进为理念，在业务领域提供优质产品与服务。', hi: 'हम उन अग्रणी और गतिशील कंपनियों में शामिल होना चाहते हैं जो निरंतर सुधार की सोच के साथ अपने क्षेत्र में गुणवत्तापूर्ण उत्पाद और सेवाएँ प्रदान करती हैं।' },
  'services.card1Title': { en: 'Company Work Management Software', zh: '企业工作管理软件', hi: 'कंपनी कार्य प्रबंधन सॉफ़्टवेयर' },
  'services.card1Text': { en: 'Center we have developed many patents in filling and packaging technology.', zh: '我们在灌装和包装技术领域开发了多项专利。', hi: 'हमने फिलिंग और पैकेजिंग तकनीक में कई पेटेंट विकसित किए हैं।' },
  'services.card2Title': { en: 'Crosson Simple Storage Service (S3)', zh: 'Crosson 简易存储服务 (S3)', hi: 'Crosson सरल स्टोरेज सेवा (S3)' },
  'services.card2Text': { en: 'Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.', zh: '安全灵活的存储服务，助力管理与访问业务数据。', hi: 'व्यावसायिक डेटा को व्यवस्थित और उपलब्ध रखने के लिए सुरक्षित व लचीली स्टोरेज सेवा।' },
  'services.card3Title': { en: 'Machine Access Salary Control Software', zh: '机器访问与工资管理软件', hi: 'मशीन एक्सेस और वेतन नियंत्रण सॉफ़्टवेयर' },
  'services.card3Text': { en: 'Center we have developed many patents in filling and packaging technology.', zh: '我们在灌装和包装技术领域开发了多项专利。', hi: 'हमने फिलिंग और पैकेजिंग तकनीक में कई पेटेंट विकसित किए हैं।' },
  'services.card4Title': { en: 'Scalable Storage in the Cloud Service', zh: '可扩展云存储服务', hi: 'स्केलेबल क्लाउड स्टोरेज सेवा' },
  'services.card4Text': { en: 'Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.', zh: '灵活扩展的云存储，满足不断增长的业务需求。', hi: 'बढ़ती व्यावसायिक ज़रूरतों के लिए लचीली और विस्तार योग्य क्लाउड स्टोरेज।' },
  'services.partners': { en: 'Partners', zh: '合作伙伴', hi: 'साझेदार' },
  'services.partnersHeading': { en: 'Crosson, Trusted by over 1,000 businesses of all sizes', zh: 'Crosson 深受各类规模超过 1,000 家企业信赖', hi: 'Crosson पर हर आकार के 1,000 से अधिक व्यवसाय भरोसा करते हैं' },
  'language.label': { en: 'Language', zh: '语言', hi: 'भाषा' },
  'language.choose': { en: 'Choose language', zh: '选择语言', hi: 'भाषा चुनें' },
  'help': { en: 'Do you need help?', zh: '需要帮助吗？', hi: 'क्या आपको मदद चाहिए?' },
  'nav.products': { en: 'Products', zh: '产品', hi: 'उत्पाद' }, 'nav.solutions': { en: 'Solutions', zh: '解决方案', hi: 'समाधान' },
  'nav.software': { en: 'Softwares', zh: '软件', hi: 'सॉफ़्टवेयर' }, 'nav.services': { en: 'Services', zh: '服务', hi: 'सेवाएँ' },
  'nav.corporate': { en: 'Corporate', zh: '公司', hi: 'कंपनी' }, 'nav.news': { en: 'News', zh: '新闻', hi: 'समाचार' },
  'nav.contact': { en: 'Contact', zh: '联系', hi: 'संपर्क' },
  'hero.titleA': { en: 'We make Filling & Packaging Machines for', zh: '我们制造', hi: 'हम बनाते हैं' },
  'hero.titleB': { en: 'Food Industry', zh: '食品行业灌装和包装机械', hi: 'खाद्य उद्योग के लिए फिलिंग और पैकेजिंग मशीनें' },
  'hero.description': { en: 'With our flexible production capacity and high technology, we produce customized solutions for your needs.', zh: '凭借灵活的生产能力和先进技术，我们为您打造定制化解决方案。', hi: 'लचीली उत्पादन क्षमता और उन्नत तकनीक के साथ, हम आपकी ज़रूरतों के अनुसार समाधान बनाते हैं।' },
  'hero.slide2.titleA': { en: 'Automation that keeps', zh: '自动化让生产', hi: 'स्वचालन से उत्पादन' }, 'hero.slide2.titleB': { en: 'production moving', zh: '持续运转', hi: 'लगातार चलता रहता है' },
  'hero.slide2.description': { en: 'From planning to commissioning, our team supports every step of your production journey.', zh: '从规划到调试，我们的团队为生产流程的每一步提供支持。', hi: 'योजना से कमीशनिंग तक, हमारी टीम उत्पादन यात्रा के हर चरण में साथ देती है।' },
  'hero.slide3.titleA': { en: 'Reliable filling and', zh: '可靠的灌装与', hi: 'विश्वसनीय फिलिंग और' }, 'hero.slide3.titleB': { en: 'packaging systems', zh: '包装系统', hi: 'पैकेजिंग सिस्टम' },
  'hero.slide3.description': { en: 'Flexible machines designed to meet the changing needs of food production.', zh: '灵活的设备设计，满足食品生产不断变化的需求。', hi: 'खाद्य उत्पादन की बदलती ज़रूरतों को पूरा करने के लिए बनाई गई लचीली मशीनें।' },
  'hero.slideLabel': { en: 'Go to banner', zh: '切换至横幅', hi: 'बैनर पर जाएँ' },
  'hero.products': { en: 'Our Products', zh: '我们的产品', hi: 'हमारे उत्पाद' }, 'sales.department': { en: 'Sales Department', zh: '销售部门', hi: 'बिक्री विभाग' },
  'about.eyebrow': { en: 'Who we are', zh: '关于我们', hi: 'हम कौन हैं' },
  'about.titleA': { en: 'Crosson is an international group dedicated to the', zh: 'Crosson 是一家专注于', hi: 'Crosson एक अंतरराष्ट्रीय समूह है जो' },
  'about.titleB': { en: 'food industry.', zh: '食品行业的国际集团。', hi: 'खाद्य उद्योग के लिए समर्पित है।' },
  'about.description1': { en: 'Crosson has twenty years’ experience in food, quality, automation and software which has been established in the food sector for Research, Efficiency and Solution Production.', zh: 'Crosson 在食品、质量、自动化和软件领域拥有二十年经验，致力于食品行业的研发、效率提升和解决方案生产。', hi: 'Crosson को खाद्य, गुणवत्ता, स्वचालन और सॉफ़्टवेयर में बीस वर्षों का अनुभव है। हम खाद्य क्षेत्र के लिए अनुसंधान, दक्षता और समाधान विकसित करते हैं।' },
  'about.description2': { en: 'It was not long to discover that supported to knowledge by scientific perspectives, would be the solution to the real needs of the sector.', zh: '我们很快发现，以科学视角为基础的知识能够帮助解决行业的实际需求。', hi: 'हमने जल्द ही जाना कि वैज्ञानिक दृष्टिकोण पर आधारित ज्ञान इस क्षेत्र की वास्तविक ज़रूरतों का समाधान है।' },
  'about.button': { en: 'About Us', zh: '关于我们', hi: 'हमारे बारे में' }, 'about.certificates': { en: 'Quality Certificates', zh: '质量证书', hi: 'गुणवत्ता प्रमाणपत्र' },
  'stat.export': { en: 'Exported to 24 Countries', zh: '出口至 24 个国家', hi: '24 देशों में निर्यात' }, 'stat.exportText': { en: '168 companies in 24 countries use our machines', zh: '24 个国家的 168 家公司使用我们的设备', hi: '24 देशों की 168 कंपनियाँ हमारी मशीनों का उपयोग करती हैं' },
  'stat.products': { en: '8 Billion Products Per Day', zh: '每天生产 80 亿件产品', hi: 'प्रतिदिन 8 अरब उत्पाद' }, 'stat.productsText': { en: '8 billion products are produced daily from our machines.', zh: '我们的机器每天生产 80 亿件产品。', hi: 'हमारी मशीनों से प्रतिदिन 8 अरब उत्पाद बनाए जाते हैं।' },
  'stat.people': { en: 'We touch 850 million people a day', zh: '每天服务 8.5 亿人', hi: 'हम हर दिन 85 करोड़ लोगों तक पहुँचते हैं' }, 'stat.peopleText': { en: '850 million people use products made by their machines every day', zh: '每天有 8.5 亿人使用由我们的机器生产的产品', hi: 'हर दिन 85 करोड़ लोग हमारी मशीनों से बने उत्पादों का उपयोग करते हैं' },
  'solutions.eyebrow': { en: 'What we do', zh: '我们的业务', hi: 'हम क्या करते हैं' },
  'solutions.titleA': { en: 'With our flexible production capacity and high technology, we', zh: '凭借灵活的生产能力和先进技术，我们', hi: 'लचीली उत्पादन क्षमता और उन्नत तकनीक के साथ, हम' },
  'solutions.titleB': { en: 'produce customized', zh: '提供定制化', hi: 'अनुकूलित' },
  'solutions.titleC': { en: 'solutions for your needs.', zh: '解决方案，满足您的需求。', hi: 'समाधान आपकी ज़रूरतों के लिए बनाते हैं।' },
  'solutions.watch': { en: 'Watch Our Machines', zh: '观看我们的设备', hi: 'हमारी मशीनें देखें' },
  'tab.filling': { en: 'Filling and Packaging Machines', zh: '灌装和包装机械', hi: 'फिलिंग और पैकेजिंग मशीनें' }, 'tab.endline': { en: 'End of Line Solutions', zh: '生产线末端解决方案', hi: 'लाइन के अंत के समाधान' },
  'tab.software': { en: 'Food Industry Machines Software', zh: '食品机械软件', hi: 'खाद्य उद्योग मशीन सॉफ़्टवेयर' }, 'tab.support': { en: '7/24 Technical Support', zh: '全天候技术支持', hi: '24/7 तकनीकी सहायता' }, 'tab.special': { en: 'Special Solutions for Your Needs', zh: '为您量身定制的解决方案', hi: 'आपकी ज़रूरतों के लिए विशेष समाधान' },
  'machine.description': { en: 'Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie.', zh: '我们提供灵活、高效的食品生产设备，满足不同产品和包装需求。我们的团队可根据您的生产目标定制解决方案。', hi: 'हम विभिन्न उत्पादों और पैकेजिंग आवश्यकताओं के लिए लचीली और कुशल खाद्य उत्पादन मशीनें प्रदान करते हैं। हमारी टीम आपके उत्पादन लक्ष्यों के अनुसार समाधान तैयार करती है।' },
  'readMore': { en: 'Read more', zh: '了解更多', hi: 'और पढ़ें' }, 'machine.linear': { en: 'Linear Machines', zh: '直线式机器', hi: 'लीनियर मशीनें' }, 'machine.rotary': { en: 'Rotary Machines', zh: '旋转式机器', hi: 'रोटरी मशीनें' }, 'machine.bottle': { en: 'Bottle Filling Machines', zh: '瓶装灌装机', hi: 'बोतल फिलिंग मशीनें' },
  'meeting.title': { en: 'Let’s Plan an Online Meeting', zh: '预约在线会议', hi: 'ऑनलाइन मीटिंग तय करें' }, 'meeting.available': { en: 'We are Available Now', zh: '我们现在有空', hi: 'हम अभी उपलब्ध हैं' }, 'contact.interested': { en: 'Are you interested? Contact our sales department now', zh: '感兴趣吗？立即联系销售部门', hi: 'क्या आप रुचि रखते हैं? अभी हमारे बिक्री विभाग से संपर्क करें' }, 'sales.manager': { en: 'Erkan Giris / Sales Manager', zh: 'Erkan Giris / 销售经理', hi: 'Erkan Giris / बिक्री प्रबंधक' },
  'journey.eyebrow': { en: 'How we do', zh: '我们的流程', hi: 'हम कैसे काम करते हैं' }, 'journey.titleA': { en: 'A journey from', zh: '从设计到产品的', hi: 'डिज़ाइन से उत्पाद तक का' }, 'journey.titleB': { en: 'design to product.', zh: '完整旅程。', hi: 'सफ़र।' },
  'journey.lead': { en: 'Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & commissioning are made by us.', zh: '从客户产品规划开始，设计、制造、软件、组装、安装和调试均由我们完成。', hi: 'ग्राहक के उत्पाद की योजना से शुरू करके, डिज़ाइन, निर्माण, सॉफ़्टवेयर, असेंबली, स्थापना और कमीशनिंग हम करते हैं।' },
  'journey.design': { en: 'Product Design', zh: 'उत्पाद设计', hi: 'उत्पाद डिज़ाइन' }, 'journey.designText': { en: 'We shape each product around your requirements, from early concept through detailed engineering.', zh: '我们根据您的需求打造每款产品，从初步构想到详细工程设计。', hi: 'हम शुरुआती विचार से विस्तृत इंजीनियरिंग तक, आपकी आवश्यकताओं के अनुसार उत्पाद तैयार करते हैं।' },
  'journey.planning': { en: 'Planning & Production', zh: '规划与生产', hi: 'योजना और उत्पादन' }, 'journey.planningText': { en: 'Our team develops proven filling and packaging technology for reliable production.', zh: '我们的团队开发成熟的灌装和包装技术，确保可靠生产。', hi: 'हमारी टीम विश्वसनीय उत्पादन के लिए प्रमाणित फिलिंग और पैकेजिंग तकनीक विकसित करती है।' },
  'journey.installation': { en: 'Installation & Commissioning', zh: '安装与调试', hi: 'स्थापना और कमीशनिंग' }, 'journey.installationText': { en: 'We install your equipment and help bring the production line into operation.', zh: '我们负责设备安装，并协助生产线投入运行。', hi: 'हम उपकरण स्थापित करते हैं और उत्पादन लाइन शुरू करने में सहायता देते हैं।' }, 'readMoreTitle': { en: 'Read More', zh: '阅读更多', hi: 'और पढ़ें' },
  'news.eyebrow': { en: 'Company News', zh: '公司新闻', hi: 'कंपनी समाचार' }, 'news.title': { en: 'News from Crosson', zh: 'Crosson 新闻', hi: 'Crosson से समाचार' }, 'news.lead': { en: 'News and updates from the Crosson team.', zh: '来自 Crosson 团队的新闻与动态。', hi: 'Crosson टीम की खबरें और अपडेट।' },
  'news.assembly': { en: 'Crosson Holding’s 58th ordinary general assembly convened', zh: 'Crosson Holding 召开第 58 届年度股东大会', hi: 'Crosson Holding की 58वीं वार्षिक आम बैठक आयोजित हुई' }, 'news.directors': { en: 'Crosson Holding’s new Board of Directors has been determined.', zh: 'Crosson Holding 新一届董事会已确定。', hi: 'Crosson Holding के नए निदेशक मंडल का गठन हुआ।' }, 'news.summary': { en: 'Crosson shares company updates, milestones and announcements with its partners and customers.', zh: 'Crosson 与合作伙伴和客户分享公司动态、重要进展与公告。', hi: 'Crosson अपने साझेदारों और ग्राहकों के साथ कंपनी की खबरें, उपलब्धियाँ और घोषणाएँ साझा करता है।' },
  'footer.questions': { en: 'Have any questions?', zh: '有任何问题吗？', hi: 'कोई सवाल है?' }, 'footer.contact': { en: 'Contact Us', zh: '联系我们', hi: 'संपर्क करें' }, 'footer.phone': { en: 'Phone Number', zh: '电话号码', hi: 'फ़ोन नंबर' }, 'footer.email': { en: 'E-Mail Address', zh: '电子邮件', hi: 'ई-मेल पता' }, 'footer.headquarters': { en: 'Headquarters', zh: '总部', hi: 'मुख्यालय' }, 'footer.direction': { en: 'Get Direction', zh: '获取路线', hi: 'दिशा-निर्देश' },
  'aboutPage.title': { en: 'About Us', zh: '关于我们', hi: 'हमारे बारे में' }, 'aboutPage.home': { en: 'Home', zh: '首页', hi: 'होम' }, 'aboutPage.corporate': { en: 'Corporate', zh: '公司', hi: 'कंपनी' }, 'aboutPage.breadcrumb': { en: 'About Crosson', zh: '关于 Crosson', hi: 'Crosson के बारे में' },
  'aboutPage.introTitleA': { en: 'At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for', zh: 'Crosson 深耕食品行业 20 年，持续研究、提升效率并提供', hi: 'Crosson की जड़ें खाद्य उद्योग में 20 वर्षों के अनुभव में हैं, जहाँ हम अनुसंधान, दक्षता बढ़ाने और समाधान विकसित करने के लिए' }, 'aboutPage.introTitleB': { en: 'food, quality, automation and software.', zh: '食品、质量、自动化和软件解决方案。', hi: 'खाद्य, गुणवत्ता, स्वचालन और सॉफ़्टवेयर पर काम करते हैं।' },
  'aboutPage.paragraph1': { en: 'Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.', zh: 'Crosson 深耕食品行业多年，专注于研究、提升效率并提供可靠的解决方案。我们将质量、自动化与软件技术结合起来，帮助客户优化生产流程，满足不断变化的市场需求。', hi: 'Crosson कई वर्षों से खाद्य उद्योग में काम कर रहा है। हम अनुसंधान, दक्षता और भरोसेमंद समाधान पर ध्यान देते हैं। गुणवत्ता, स्वचालन और सॉफ़्टवेयर को जोड़कर हम ग्राहकों की उत्पादन प्रक्रियाओं को बेहतर बनाने में मदद करते हैं।' },
  'aboutPage.paragraph2': { en: 'Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.', zh: '凭借食品、质量、自动化和软件领域的经验，我们从科学视角理解行业需求，并通过持续改进，为每个客户打造适合其生产目标的方案。', hi: 'खाद्य, गुणवत्ता, स्वचालन और सॉफ़्टवेयर में अपने अनुभव के साथ हम उद्योग की ज़रूरतों को वैज्ञानिक दृष्टिकोण से समझते हैं। निरंतर सुधार के ज़रिए हम हर ग्राहक के उत्पादन लक्ष्यों के अनुकूल समाधान बनाते हैं।' },
  'aboutPage.values': { en: 'Our Values', zh: '我们的价值观', hi: 'हमारे मूल्य' }, 'aboutPage.valuesTitleA': { en: 'Crosson has adopted Quality Production as its', zh: 'Crosson 将优质生产作为其', hi: 'Crosson ने गुणवत्तापूर्ण उत्पादन को अपना' }, 'aboutPage.valuesTitleB': { en: 'basic principle.', zh: '基本原则。', hi: 'मूल सिद्धांत बनाया है।' },
  'aboutPage.valuesText': { en: 'To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.', zh: '我们致力于成为行业领先、充满活力的企业，以持续改进为理念，提供优质产品与服务。', hi: 'हम उन अग्रणी, गतिशील और प्रमुख कंपनियों में शामिल होना चाहते हैं जो निरंतर सुधार की सोच के साथ गुणवत्तापूर्ण उत्पाद और सेवाएँ प्रदान करती हैं।' }, 'aboutPage.certificates': { en: 'Quality Certificates', zh: '质量证书', hi: 'गुणवत्ता प्रमाणपत्र' },
  'aboutPage.mission': { en: 'Our Mission', zh: '我们的使命', hi: 'हमारा मिशन' }, 'aboutPage.missionText': { en: 'Center we have developed many patents in filling and packaging technology.', zh: '我们在灌装和包装技术领域开发了多项专利。', hi: 'हमने फिलिंग और पैकेजिंग तकनीक में कई पेटेंट विकसित किए हैं।' }, 'aboutPage.vision': { en: 'Our Vision', zh: '我们的愿景', hi: 'हमारा विज़न' }, 'aboutPage.visionText': { en: 'Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.', zh: '通过创新技术，引领食品生产的未来。', hi: 'नवाचार के ज़रिए खाद्य उत्पादन के भविष्य को दिशा देना।' },
  'aboutPage.partners': { en: 'Partners', zh: '合作伙伴', hi: 'साझेदार' }, 'aboutPage.partnerAlt': { en: 'Crosson partner', zh: 'Crosson 合作伙伴', hi: 'Crosson साझेदार' }, 'aboutPage.partnersTitleA': { en: 'Ask our', zh: '询问我们的', hi: 'हमारे' }, 'aboutPage.partnersTitleB': { en: 'happy customers', zh: '满意客户', hi: 'संतुष्ट ग्राहकों से' }, 'aboutPage.partnersTitleC': { en: 'about our quality', zh: '对我们品质的评价', hi: 'हमारी गुणवत्ता के बारे में पूछें' }, 'aboutPage.quote': { en: 'To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.', zh: '我们致力于成为行业领先、充满活力的企业，以持续改进为理念，提供优质产品与服务。', hi: 'हम उन अग्रणी और गतिशील कंपनियों में शामिल होना चाहते हैं जो निरंतर सुधार के साथ गुणवत्तापूर्ण उत्पाद और सेवाएँ देती हैं।' }, 'aboutPage.quoteBy': { en: 'Erkan Giris, EG Theme', zh: 'Erkan Giris，EG Theme', hi: 'Erkan Giris, EG Theme' }, 'aboutPage.becomePartner': { en: 'Become Partner', zh: '成为合作伙伴', hi: 'साझेदार बनें' },
  'footer.products': { en: 'Products', zh: '产品', hi: 'उत्पाद' }, 'footer.solutions': { en: 'Solutions', zh: '解决方案', hi: 'समाधान' }, 'footer.corporate': { en: 'Corporate', zh: '公司', hi: 'कंपनी' },
  'footer.filling': { en: 'Filling Machines', zh: '灌装机', hi: 'फिलिंग मशीनें' }, 'footer.bottleSeries': { en: 'Bottle Filling Series', zh: '瓶装灌装系列', hi: 'बोतल फिलिंग श्रृंखला' }, 'footer.package': { en: 'Package Machines', zh: '包装机', hi: 'पैकेजिंग मशीनें' }, 'footer.linear': { en: 'Linear Machines', zh: '直线式机器', hi: 'लीनियर मशीनें' }, 'footer.rotary': { en: 'Rotary Machines', zh: '旋转式机器', hi: 'रोटरी मशीनें' },
  'footer.endline': { en: 'End of Line Solutions', zh: '生产线末端解决方案', hi: 'लाइन के अंत के समाधान' }, 'footer.software': { en: 'Food Industry Machines Software', zh: '食品机械软件', hi: 'खाद्य उद्योग मशीन सॉफ़्टवेयर' }, 'footer.research': { en: 'Research Solutions', zh: '研发解决方案', hi: 'अनुसंधान समाधान' }, 'footer.conveyor': { en: 'Conveyor Solutions', zh: '输送解决方案', hi: 'कन्वेयर समाधान' }, 'footer.special': { en: 'Special Solutions for Your Needs', zh: '为您量身定制的解决方案', hi: 'आपकी ज़रूरतों के लिए विशेष समाधान' },
  'footer.about': { en: 'About Us', zh: '关于我们', hi: 'हमारे बारे में' }, 'footer.values': { en: 'Our Values', zh: '我们的价值观', hi: 'हमारे मूल्य' }, 'footer.hr': { en: 'Human Resources', zh: '人力资源', hi: 'मानव संसाधन' }, 'footer.news': { en: 'News', zh: '新闻', hi: 'समाचार' }, 'footer.contactLink': { en: 'Contact', zh: '联系', hi: 'संपर्क' },
  'career.title': { en: 'Career Opportunities', zh: '职业机会', hi: 'करियर के अवसर' }, 'career.text': { en: 'Join Crosson and help build innovative food production solutions.', zh: '加入 Crosson，共同打造创新的食品生产解决方案。', hi: 'Crosson से जुड़ें और खाद्य उत्पादन के नए समाधान बनाने में मदद करें।' }, 'career.openings': { en: 'Opening Positions', zh: '开放职位', hi: 'खुली भूमिकाएँ' }, 'footer.copyright': { en: 'Copyright by Erkan Giris | All rights reserved', zh: '版权所有 Erkan Giris | 保留所有权利', hi: 'कॉपीराइट Erkan Giris | सर्वाधिकार सुरक्षित' }, 'footer.privacy': { en: 'Our Privacy and Personal Data Protection Policy', zh: '隐私与个人数据保护政策', hi: 'गोपनीयता और व्यक्तिगत डेटा संरक्षण नीति' }, 'footer.terms': { en: 'Terms and Conditions of Use', zh: '使用条款与条件', hi: 'उपयोग के नियम और शर्तें' },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly language = signal<Language>(this.readSavedLanguage());

  t(key: string): string {
    return translations[key]?.[this.language()] ?? translations[key]?.en ?? key;
  }

  setLanguage(language: string): void {
    if (language !== 'en' && language !== 'zh' && language !== 'hi') return;
    this.language.set(language);
    if (typeof localStorage !== 'undefined') localStorage.setItem('crosson-language', language);
    if (typeof document !== 'undefined') document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }

  private readSavedLanguage(): Language {
    if (typeof localStorage === 'undefined') return 'en';
    const saved = localStorage.getItem('crosson-language');
    return saved === 'zh' || saved === 'hi' ? saved : 'en';
  }
}
