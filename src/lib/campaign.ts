export const PHONE_DISPLAY = "059 664 8717";
export const PHONE_E164 = "966596648717";
export const WA_BASE = `https://wa.me/${PHONE_E164}`;

export const WA_INTAKE =
  "https://wa.me/966596648717?text=" +
  encodeURIComponent(
    "أهلاً، أطلب تشخيص مبدئي.\nنوع السيارة:\nسنة الصنع:\nالعَرَض:",
  );

export const LINKS = {
  whatsapp: WA_BASE,
  snapchat: "https://snapchat.com/t/5qh1Pqk0",
  tiktok: "https://www.tiktok.com/@omarfaomar",
  maps: "https://share.google/NCoVNJnk9KZejR93e",
  call: "tel:+966596648717",
} as const;

export const SHOP = { ar: "ورشة بقعة ضوء", en: "Spot Light Garage" };
export const CAMPAIGN = { ar: "هندسة الدقة", en: "Precision Driven" };
export const OMAR = { ar: "عمر", en: "Omar" };
export const OMAR_FULL = { ar: "عمر ف. ع. عمر", en: "Omar F. A. Omar" };
export const ROLE = {
  ar: "المدير العام والمستشار الفني",
  en: "General manager and technical consultant",
};

export const address = {
  area: { ar: "الصناعية القديمة، الرياض", en: "Old Industrial District, Riyadh" },
  street: {
    ar: "8197 شارع غنيمة، الرياض 12878",
    en: "8197 Ghunaymah Street, Riyadh 12878",
  },
};

export const HERO_OVERLAY = {
  kicker: { ar: "الوجه والضمان", en: "The face and the guarantee" },
  name: { ar: "عمر.", en: "Omar." },
  bio: {
    ar: "مدير عام يستقبل العميل، يقرأ الكود بنفسه، ويسلّم السيارة بدون عطل متبقي.",
    en: "A general manager who greets the owner, reads the code himself, and hands the car back with no leftover fault.",
  },
};

export const CAPTION = {
  done: { ar: "تشخيص تم تنفيذ", en: "Diagnosed. Done." },
  role: { ar: "عمر — المدير العام", en: "Omar — General Manager" },
};

export const LIBRARY = {
  title: { ar: "مكتبة الأصول", en: "Asset library" },
  sub: {
    ar: "صور وفيديوهات بعمر كوجه العلامة — مهارة التشخيص، ثم العميل في الوسط.",
    en: "Photos and clips with Omar as the face — diagnostic skill, then the owner in the middle.",
  },
};

export const COPY_SECTION = {
  title: { ar: "نصوص جاهزة للنسخ", en: "Ready-to-paste copy" },
  sub: {
    ar: "الصق كما هي على الريلز أو واتساب. الرقم ثابت.",
    en: "Paste as-is on Reels or WhatsApp. The number stays the same.",
  },
};

export type Kind = "video" | "image";
export type Pillar = "identity" | "skill" | "customer";
export type Ratio = "portrait" | "landscape" | "square";
export type FilterId =
  | "all"
  | "video"
  | "photo"
  | "identity"
  | "skill"
  | "customer";

export type Asset = {
  id: string;
  kind: Kind;
  src: string;
  poster?: string;
  ratio: Ratio;
  pillar: Pillar;
  duration?: string;
  title: { ar: string; en: string };
  use: { ar: string; en: string };
};

export const filters: { id: FilterId; ar: string; en: string }[] = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "video", ar: "فيديو", en: "Video" },
  { id: "photo", ar: "صور", en: "Photos" },
  { id: "identity", ar: "هوية عمر", en: "Omar" },
  { id: "skill", ar: "مهارة", en: "Skill" },
  { id: "customer", ar: "العميل", en: "Customer" },
];

export const heroClips = {
  greeting: {
    src: "/videos/studio-greeting.mp4",
    poster: "/posters/studio-greeting.jpg",
  },
  bay: {
    src: "/videos/studio-baywalk.mp4",
    poster: "/posters/studio-baywalk.jpg",
  },
  featured: {
    src: "/videos/studio-scan.mp4",
    poster: "/posters/studio-scan.jpg",
  },
} as const;

export function matchFilter(asset: Asset, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "video") return asset.kind === "video";
  if (filter === "photo") return asset.kind === "image";
  return asset.pillar === filter;
}

export const assets: Asset[] = [
  {
    id: "handover",
    kind: "video",
    src: "/videos/studio-handover.mp4",
    poster: "/posters/studio-handover.jpg",
    ratio: "landscape",
    pillar: "customer",
    duration: "6s",
    title: { ar: "تسليم المفاتيح", en: "Key handover" },
    use: { ar: "إغلاق الريلز، ستوري تسليم", en: "Reel closer, handover story" },
  },
  {
    id: "consult",
    kind: "video",
    src: "/videos/studio-consult.mp4",
    poster: "/posters/studio-consult.jpg",
    ratio: "landscape",
    pillar: "customer",
    duration: "6s",
    title: { ar: "شرح للعميل", en: "Explaining to the owner" },
    use: { ar: "ريلز خدمة العملاء", en: "Service-trust Reels" },
  },
  {
    id: "scan",
    kind: "video",
    src: "/videos/studio-scan.mp4",
    poster: "/posters/studio-scan.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "6s",
    title: { ar: "عمر والتشخيص", en: "Omar with the scan" },
    use: { ar: "تيك توك، ريلز، يوتيوب شورتس", en: "TikTok, Reels, Shorts" },
  },
  {
    id: "portrait",
    kind: "video",
    src: "/videos/studio-portrait.mp4",
    poster: "/posters/studio-portrait.jpg",
    ratio: "square",
    pillar: "identity",
    duration: "6s",
    title: { ar: "صورة عمر الحية", en: "Omar living portrait" },
    use: {
      ar: "غطاء واتساب، ريلز افتتاح، صورة جوجل",
      en: "WhatsApp, reel open, Google",
    },
  },
  {
    id: "talk",
    kind: "video",
    src: "/videos/studio-talk.mp4",
    poster: "/posters/studio-talk.jpg",
    ratio: "portrait",
    pillar: "identity",
    duration: "6s",
    title: { ar: "بطل التشخيص", en: "The diagnostic face" },
    use: { ar: "منشور ثابت، إعلان مموّل", en: "Still post, paid ad" },
  },
  {
    id: "story-consult",
    kind: "video",
    src: "/videos/studio-story-consult.mp4",
    poster: "/posters/studio-story-consult.jpg",
    ratio: "portrait",
    pillar: "customer",
    duration: "6s",
    title: { ar: "جلسة التشخيص", en: "Diagnostic sitting" },
    use: { ar: "كاروسيل ثقة", en: "Trust carousel" },
  },
  {
    id: "greeting",
    kind: "video",
    src: "/videos/studio-greeting.mp4",
    poster: "/posters/studio-greeting.jpg",
    ratio: "landscape",
    pillar: "customer",
    duration: "6s",
    title: { ar: "استقبال السطحة", en: "Tow-in welcome" },
    use: { ar: "افتتاح إعلان، يوتيوب", en: "Ad open, YouTube" },
  },
  {
    id: "baywalk",
    kind: "video",
    src: "/videos/studio-baywalk.mp4",
    poster: "/posters/studio-baywalk.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "6s",
    title: { ar: "جولة الورشة", en: "Bay walkthrough" },
    use: {
      ar: "يوتيوب، إنستغرام أفقي، جوجل",
      en: "YouTube, landscape IG, Google",
    },
  },
  {
    id: "intake",
    kind: "video",
    src: "/videos/floor-intake.mp4",
    poster: "/posters/floor-intake.jpg",
    ratio: "portrait",
    pillar: "customer",
    duration: "3s",
    title: { ar: "دخول السطحة", en: "Flatbed in" },
    use: { ar: "افتتاح ريلز", en: "Reel open" },
  },
  {
    id: "cabin",
    kind: "video",
    src: "/videos/floor-cabin.mp4",
    poster: "/posters/floor-cabin.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "36s",
    title: { ar: "عمر داخل السيارة", en: "Omar in the cabin" },
    use: { ar: "ريلز تشخيص", en: "Diagnostic Reel" },
  },
  {
    id: "floor-scan",
    kind: "video",
    src: "/videos/floor-scan.mp4",
    poster: "/posters/floor-scan.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "17s",
    title: { ar: "جهاز الفحص في اليد", en: "Scanner in hand" },
    use: { ar: "ستوري مهارة", en: "Skill story" },
  },
  {
    id: "g70",
    kind: "video",
    src: "/videos/floor-g70.mp4",
    poster: "/posters/floor-g70.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "1:25",
    title: { ar: "فحص على الشاشة", en: "On-screen diagnosis" },
    use: { ar: "ريلز من الورشة", en: "Floor Reel" },
  },
  {
    id: "elantra",
    kind: "video",
    src: "/videos/floor-elantra.mp4",
    poster: "/posters/floor-elantra.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "25s",
    title: { ar: "على الرافعة", en: "On the lift" },
    use: { ar: "إثبات الورشة", en: "Shop proof" },
  },
  {
    id: "k5",
    kind: "video",
    src: "/videos/floor-k5.mp4",
    poster: "/posters/floor-k5.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "41s",
    title: { ar: "K5 في البَي", en: "K5 in the bay" },
    use: { ar: "يوتيوب شورتس", en: "Shorts" },
  },
  {
    id: "undercar",
    kind: "video",
    src: "/videos/floor-undercar.mp4",
    poster: "/posters/floor-undercar.jpg",
    ratio: "landscape",
    pillar: "skill",
    duration: "34s",
    title: { ar: "تحت السيارة", en: "Undercarriage" },
    use: { ar: "ريلز 2 — تحت السيارة", en: "Reel 2 — under the car" },
  },
  {
    id: "cluster",
    kind: "video",
    src: "/videos/floor-cluster.mp4",
    poster: "/posters/floor-cluster.jpg",
    ratio: "portrait",
    pillar: "customer",
    duration: "14s",
    title: { ar: "لوحة نظيفة", en: "Clear cluster" },
    use: { ar: "إغلاق التسليم", en: "Handover close" },
  },
  {
    id: "engine",
    kind: "video",
    src: "/videos/floor-engine.mp4",
    poster: "/posters/floor-engine.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "18s",
    title: { ar: "المحرك مفتوح", en: "Open bay" },
    use: { ar: "ستوري الورشة", en: "Shop story" },
  },
  {
    id: "rpm",
    kind: "video",
    src: "/videos/floor-rpm.mp4",
    poster: "/posters/floor-rpm.jpg",
    ratio: "portrait",
    pillar: "customer",
    duration: "21s",
    title: { ar: "تجربة الدوران", en: "RPM sweep" },
    use: { ar: "إغلاق الحالة", en: "Case closer" },
  },
  {
    id: "omar-lift",
    kind: "video",
    src: "/videos/floor-omar-lift.mp4",
    poster: "/posters/floor-omar-lift.jpg",
    ratio: "portrait",
    pillar: "identity",
    duration: "32s",
    title: { ar: "عمر على الرافعة", en: "Omar at the lift" },
    use: { ar: "بروفايل، بنر", en: "Profile, banner" },
  },
  {
    id: "omar-talk",
    kind: "video",
    src: "/videos/floor-omar-talk.mp4",
    poster: "/posters/floor-omar-talk.jpg",
    ratio: "portrait",
    pillar: "identity",
    duration: "56s",
    title: { ar: "عمر يتكلم من الورشة", en: "Omar from the floor" },
    use: { ar: "يوتيوب، واتساب ستاتس", en: "YouTube, WhatsApp status" },
  },
  {
    id: "sonata",
    kind: "video",
    src: "/videos/floor-sonata.mp4",
    poster: "/posters/floor-sonata.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "1:16",
    title: { ar: "سوناتا على الجهاز", en: "Sonata on the tool" },
    use: { ar: "ريلز من الورشة", en: "Floor Reel" },
  },
  {
    id: "tablet",
    kind: "video",
    src: "/videos/floor-tablet.mp4",
    poster: "/posters/floor-tablet.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "10s",
    title: { ar: "الشاشة في اليد", en: "Screen in hand" },
    use: { ar: "ستوري سريع", en: "Quick story" },
  },
  {
    id: "bay-2",
    kind: "video",
    src: "/videos/floor-bay-2.mp4",
    poster: "/posters/floor-bay-2.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "10s",
    title: { ar: "طاقة التشغيل", en: "Shop capacity" },
    use: { ar: "منشور طاقة الورشة", en: "Capacity post" },
  },
  {
    id: "live",
    kind: "video",
    src: "/videos/floor-live.mp4",
    poster: "/posters/floor-live.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "20s",
    title: { ar: "بيانات حية", en: "Live data" },
    use: { ar: "غلاف يوتيوب، لينكدإن", en: "YouTube cover, LinkedIn" },
  },
  {
    id: "k5-bay",
    kind: "video",
    src: "/videos/bay-k5.mp4",
    poster: "/posters/floor-k5-bay.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "41s",
    title: { ar: "K5 من الورشة", en: "K5 on the floor" },
    use: { ar: "ريلز الورشة", en: "Shop Reel" },
  },
  {
    id: "g70-case",
    kind: "video",
    src: "/videos/case-g70.mp4",
    poster: "/posters/floor-case-g70.jpg",
    ratio: "portrait",
    pillar: "skill",
    duration: "1:25",
    title: { ar: "جينيسيس على الجهاز", en: "Genesis on the tool" },
    use: { ar: "حالة من الورشة", en: "Floor case" },
  },
  {
    id: "photo-portrait",
    kind: "image",
    src: "/media/omar-portrait.jpg",
    ratio: "portrait",
    pillar: "identity",
    title: { ar: "صورة الملف", en: "Profile portrait" },
    use: { ar: "واتساب، جوجل، إنستغرام", en: "WhatsApp, Google, Instagram" },
  },
  {
    id: "photo-workshop",
    kind: "image",
    src: "/media/omar-workshop.jpg",
    ratio: "portrait",
    pillar: "identity",
    title: { ar: "عمر في الورشة", en: "Omar on the floor" },
    use: { ar: "منشور هوية", en: "Identity post" },
  },
  {
    id: "photo-k5",
    kind: "image",
    src: "/media/k5-tablet.jpg",
    ratio: "portrait",
    pillar: "skill",
    title: { ar: "K5 والجهاز", en: "K5 and the tablet" },
    use: { ar: "غلاف ريلز", en: "Reel cover" },
  },
  {
    id: "photo-k5-bay",
    kind: "image",
    src: "/media/k5-bay.jpg",
    ratio: "landscape",
    pillar: "skill",
    title: { ar: "K5 في البَي", en: "K5 in the bay" },
    use: { ar: "غلاف يوتيوب", en: "YouTube cover" },
  },
  {
    id: "photo-facade",
    kind: "image",
    src: "/media/shop-facade.jpg",
    ratio: "landscape",
    pillar: "customer",
    title: { ar: "باب الورشة", en: "Shop door" },
    use: { ar: "بنر جوجل، إعلان أفقي", en: "Google banner, landscape ad" },
  },
  {
    id: "photo-night",
    kind: "image",
    src: "/media/shop-night.jpg",
    ratio: "portrait",
    pillar: "customer",
    title: { ar: "الورشة ليلاً", en: "The shop at night" },
    use: { ar: "ستوري", en: "Story" },
  },
  {
    id: "photo-lift",
    kind: "image",
    src: "/media/elantra-lift.jpg",
    ratio: "portrait",
    pillar: "skill",
    title: { ar: "تحت السيارة", en: "Under the car" },
    use: { ar: "إثبات", en: "Proof still" },
  },
  {
    id: "photo-g70",
    kind: "image",
    src: "/media/case-g70.jpg",
    ratio: "portrait",
    pillar: "skill",
    title: { ar: "جينيسيس", en: "Genesis" },
    use: { ar: "منشور حالة", en: "Case still" },
  },
  {
    id: "photo-sonata",
    kind: "image",
    src: "/media/case-sonata.jpg",
    ratio: "portrait",
    pillar: "skill",
    title: { ar: "سوناتا", en: "Sonata" },
    use: { ar: "غلاف ريلز", en: "Reel cover" },
  },
];

export const posts = [
  {
    id: "reel1",
    label: { ar: "ريلز / تيك توك", en: "Reel / TikTok" },
    ar: `وصلت السطحة.
قبل ما نفك برغي، نقرأ الكود.
ورشة بقعة ضوء — هندسة الدقة.
${PHONE_DISPLAY}`,
    en: `The flatbed arrived.
Before a bolt turns, we read the code.
Spot Light Garage — Precision Driven.
${PHONE_DISPLAY}`,
  },
  {
    id: "reel2",
    label: { ar: "ريلز تشخيص", en: "Diagnostic Reel" },
    ar: `هذا مو تخمين.
هيكل، عادم، سلينويد، نسبة القير.
إذا الكود P0733… ما نبيعك قير جديد من أول يوم.
عمر، المدير العام.`,
    en: `This is not a guess.
Chassis, exhaust, solenoid, gear ratio.
If the code is P0733… we do not sell a gearbox on day one.
Omar, General Manager.`,
  },
  {
    id: "wa",
    label: { ar: "رد واتساب", en: "WhatsApp reply" },
    ar: `أهلاً، معك عمر / ورشة بقعة ضوء.
أرسل: نوع السيارة — الموديل — العَرَض (صوت / حرارة / قير / كود).
نحدد هل تحتاج فحص إلكتروني فقط أو صيانة كاملة قبل ما تجي.`,
    en: `Hi, this is Omar / Spot Light Garage.
Send: car type — year — symptom (noise / heat / gearbox / code).
We will say whether you need a scan only or a full service before you come in.`,
  },
  {
    id: "gbp",
    label: { ar: "جوجل بزنس", en: "Google Business" },
    ar: `تشخيص إلكتروني بمنهج وكالة، وتنفيذ ورشة متخصص للكوري.
عمر يشرف على التسليم — بدون كود متبقي.
احجز فحصك: ${PHONE_DISPLAY}`,
    en: `Dealership-method electronics. Workshop execution. Korean specialist.
Omar signs the handover — no leftover code.
Book a scan: ${PHONE_DISPLAY}`,
  },
] as const;
