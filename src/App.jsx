import { useState, useEffect, useRef, useMemo } from "react";

// ─── BRAND ───────────────────────────────────────────────────
const BRAND = {
  red: "#8C2D32",
  redLight: "rgba(140,45,50,0.08)",
  redMid: "rgba(140,45,50,0.15)",
  butter: "#FEEBAB",
  butterLight: "#FFF5E0",
  bg: "#FFFFFF",
  text: "#2C2522",
  textMid: "rgba(44,37,34,0.6)",
  textLight: "rgba(44,37,34,0.4)",
  textFaint: "rgba(44,37,34,0.08)",
  card: "#FFFFFF",
  border: "rgba(44,37,34,0.06)",
  star: "#C4A050",
};

function BookdLogo({ height = 28, color = BRAND.red }) {
  return (
    <svg viewBox="0 0 216 59.867" style={{height,display:"block"}} xmlns="http://www.w3.org/2000/svg">
      <path d="M199.964,0c-1.627,4.984-3.275,9.978-4.974,14.951-.307.941-.634,1.893-.952,2.835-1.116-.901-2.415-1.637-3.817-2.139-.563-.215-1.146-.379-1.73-.512-.87-.194-1.75-.297-2.63-.297-6.775,0-12.618,4.595-16.579,10.653-2.129,3.265-3.715,6.949-4.605,10.561,0,.02-.01.031-.01.051-.317.502-.635.993-.962,1.453l-.01.02c-3.152,4.513-6.662,6.959-7.87,7.563-1.596.808-2.64,1.054-3.848,1.341-2.057.491-2.569.276-2.784.184-.072-.031-.409-.194-.737-.522-.194-.184-.768-.757-1.044-3.838-.246-2.722-.072-5.383.501-7.911.184-.798.348-1.556.44-1.74.44-.931,1.556-1.31,3.643-1.955,2.558-.788,6.058-1.863,9.292-5.229,1.944-2.026,7.645-9.579,7.645-9.579h-15.944s-3.786,4.401-6.887,5.751c-.952.42-1.883.675-2.732.829,1.494-3.889,3.009-7.798,4.534-11.718,1.545-3.991,2.958-7.594,4.216-10.756h-16.394c-3.009,8.75-6.017,17.5-9.036,26.25-1.423,2.518-3.367,3.909-5.71,4.094-.471-7.89-5.762-15.504-15.453-15.504-9.047,0-17.029,5.352-21.46,14.348-.952.675-2.006,1.064-3.152,1.156-.481-7.89-5.762-15.504-15.463-15.504-9.036,0-17.029,5.352-21.46,14.348-.788.563-1.637.911-2.558,1.054.02-.348.031-.716.031-1.075,0-8.781-4.513-14.327-11.789-14.327-2.231,0-4.503.675-6.621,1.719,2.067-5.557,4.298-11.237,6.406-16.558H13.372c-1.525,4.38-3.07,8.729-4.574,12.966-2.108,5.956-4.298,12.117-6.396,18.267-3.367,9.732-3.193,17.315.522,22.524,4.165,5.854,11.012,6.11,13.007,6.11,8.924,0,17.53-6.345,22.248-16.579.839.031,1.678,0,2.528-.082v.194c0,9.845,6.345,16.466,15.78,16.466,9.886,0,18.298-6.324,22.269-16.599.655-.01,1.341-.031,2.016-.102v.235c0,9.845,6.345,16.466,15.791,16.466,9.886,0,18.298-6.324,22.269-16.599.655,0,1.351-.031,2.026-.102l-.307.89c-1.392,4.053-2.794,8.095-4.175,12.137l-.901,2.62,9.814.02,5.762-.02,2.17-6.642c.696-2.129,1.156-3.541,1.494-4.585.317,4.001,1.433,7.921,4.493,10.039,2.395,1.648,5.281,2.241,7.174,2.241,7.307,0,13.15-1.74,18.011-5.414l1.423-1.156,1.136-.921c.266.481.563.941.88,1.392,3.725,5.229,9.589,5.987,12.219,6.089,2.088-.072,4.851-.409,7.931-1.443.317-.113.757-.256,1.289-.461.02-.01.041-.01.061-.02,3.306-1.535,6.376-3.94,8.985-7.061,1.678-2.006,2.958-4.329,3.756-6.826,0-.01.01-.02.01-.031l3.899-12.342L216,0h-16.036ZM17.915,45.264c-1.402,0-1.607-2.282-1.607-3.653,0-5.536,4.237-12.547,6.836-12.547,1.31,0,1.504,2.241,1.504,3.561,0,5.864-4.073,12.639-6.734,12.639ZM58.165,45.264c-1.402,0-1.607-2.282-1.607-3.653,0-5.536,4.237-12.547,6.836-12.547,1.31,0,1.504,2.241,1.504,3.561,0,5.864-4.073,12.639-6.734,12.639ZM98.23,45.264c-1.402,0-1.607-2.282-1.607-3.653,0-5.536,4.247-12.547,6.846-12.547,1.31,0,1.504,2.241,1.504,3.572,0,5.854-4.083,12.628-6.744,12.628ZM181.41,45.264c-1.402,0-1.607-2.282-1.607-3.653,0-5.536,4.237-12.547,6.836-12.547,1.31,0,1.504,2.241,1.504,3.561,0,5.864-4.073,12.639-6.734,12.639Z" fill={color}/>
    </svg>
  );
}

// ─── STUDIO DATA ─────────────────────────────────────────────
const STUDIOS = [
  {
    id: "s1", name: "Spear Pilates", neighborhood: "West Hollywood", address: "8740 Santa Monica Blvd, West Hollywood",
    zip: "90069", classTypes: ["Reformer", "Mat", "Tower"], priceRange: "$38–55/class",
    bookingUrl: "#", instagram: "@spearpilates",
    tags: { level: "Intermediate+", parking: "Street Parking" },
    goodToKnow: ["Grip socks required", "No showers", "Book ahead — small classes fill fast", "Ask for Sarah or James your first time"],
    bestFor: "Experienced reformers who want technical precision in a no-BS studio with killer instructors.",
    rating: 4.8, ratings: { aesthetic: 4.2, music: 4.5, cleanliness: 4.8, difficulty: 4.9, price: 4.0, parking: 3.5 },
    reviewCount: 12,
    gallery: [
      { color: "#D4C4B0", label: "Reformer room" },
      { color: "#C4B8A0", label: "Front desk" },
      { color: "#BCA898", label: "Equipment detail" },
      { color: "#D0C0B0", label: "Class in session" },
      { color: "#C8B8A8", label: "Street view" },
    ],
    heroReview: "This is not cute Pilates. This is real, precision-focused reformer work and I am obsessed. The instructors here actually correct your form — which is rare in LA. The studio is small and no-frills but that's part of the appeal.",
    sections: {
      space: "Intimate, no-frills reformer studio. Clean and well-maintained but don't expect the Instagram-bait aesthetic. The focus here is the work, not the wallpaper. Fits about 10 reformers — you'll never feel lost in a crowd.",
      classExperience: "Technical and precise. Instructors cue with anatomical language and actually walk the room correcting form. Classes build progressively and you'll feel muscles you didn't know existed. Not beginner-unfriendly, but definitely not a vibes-only class.",
      instructors: "Some of the best-trained in LA. Multiple instructors have 10+ years of classical Pilates training. They remember your name and your injuries. Ask for Sarah or James if it's your first time.",
      vibe: "Serious but warm. The clientele is a mix of dancers, athletes, and Pilates devotees who've tried every studio in the city and landed here. No one's checking their phone between sets.",
      knowBeforeYouGo: "Bring grip socks. Street parking on Santa Monica Blvd can be tricky — try the side streets. Book the 7 AM if you want the best instructors. They don't have showers."
    },
    videoId: null, color: "#C4A88B",
  },
  {
    id: "s2", name: "Summer Pilates", neighborhood: "Santa Monica", address: "2901 Ocean Park Blvd, Santa Monica",
    zip: "90405", classTypes: ["Reformer", "Sculpt Reformer", "Stretch"], priceRange: "$35–45/class",
    bookingUrl: "#", instagram: "@summerpilates",
    tags: { level: "All Levels", parking: "Parking Lot" },
    goodToKnow: ["Great intro offer — 3 classes discounted", "Mats and equipment provided", "5-minute walk to the beach", "Bring a sweatshirt for after class"],
    bestFor: "Beginners or anyone who wants a bright, welcoming studio with ocean-breeze energy five minutes from the beach.",
    rating: 4.6, ratings: { aesthetic: 4.9, music: 4.3, cleanliness: 4.8, difficulty: 3.8, price: 4.2, parking: 4.5 },
    reviewCount: 9,
    gallery: [
      { color: "#B8D0D8", label: "Studio interior" },
      { color: "#C8D8E0", label: "Reformer lineup" },
      { color: "#A8C0C8", label: "Window light" },
      { color: "#D0E0E8", label: "Lobby" },
    ],
    heroReview: "Summer Pilates is the studio I recommend to every friend who's new to reformer. It's light, airy, the instructors are encouraging without being patronizing, and you leave feeling like a better version of yourself. The post-class walk to the beach is just *muah*.",
    sections: {
      space: "Gorgeous. Floor-to-ceiling windows, natural light everywhere, white oak floors, and that Santa Monica breeze. The reformers are Balanced Body and well-maintained. Aesthetically, this is one of the most beautiful studios in LA.",
      classExperience: "Approachable and well-paced. Classes are challenging but never intimidating. The sculpt reformer format adds light weights and is a great total-body option. Modifications are always offered without making you feel singled out.",
      instructors: "Warm, attentive, genuinely encouraging. They check in before class about injuries and actually remember you. The energy is supportive without being over-the-top.",
      vibe: "Beach-town wellness at its best. The clientele skews younger (late 20s–30s) and the energy is positive without being performative. You'll see people chatting after class in the lobby. It feels like a community.",
      knowBeforeYouGo: "They have a great intro offer — 3 classes for a reduced rate. Parking lot behind the building. Bring a sweatshirt for after class, the ocean breeze hits different post-workout."
    },
    videoId: null, color: "#9BB5C4",
  },
  {
    id: "s3", name: "YJOH (Yogi John's Open House)", neighborhood: "Silver Lake", address: "3217 Glendale Blvd, Silver Lake",
    zip: "90039", classTypes: ["Vinyasa", "Power Yoga", "Meditation", "Sound Bath"], priceRange: "$25–35/class",
    bookingUrl: "#", instagram: "@yjoh.la",
    tags: { level: "All Levels", parking: "Street Parking" },
    goodToKnow: ["Donation-based class options", "Bring your own mat for donation classes", "Friday 7 PM sound bath books out early", "One of the most inclusive studios in LA"],
    bestFor: "Anyone who wants yoga that feels like a real community, not a performance. Silver Lake locals, this is your studio.",
    rating: 4.9, ratings: { aesthetic: 4.0, music: 4.6, cleanliness: 4.3, difficulty: 4.2, price: 5.0, parking: 3.8 },
    reviewCount: 18,
    gallery: [
      { color: "#B8C8B8", label: "Main room" },
      { color: "#A8B8A0", label: "Sound bath setup" },
      { color: "#C0D0B8", label: "Street entrance" },
      { color: "#B0C0A8", label: "Community board" },
    ],
    heroReview: "YJOH is the reason I still do yoga. It's unpretentious, deeply community-oriented, and the instructors genuinely care about your practice — not your outfit. The donation-based classes make it accessible and the sound baths are transcendent.",
    sections: {
      space: "Cozy, lived-in, real. It's not the fanciest studio in LA and that's exactly the point. Exposed brick, warm lighting, wooden floors that creak a little. It feels like someone's beautiful living room, not a corporate wellness box.",
      classExperience: "Thoughtful sequencing with a focus on breath and intention over aesthetics. Power classes are legitimately challenging. The meditation and sound bath offerings are some of the best in the city — don't sleep on the Friday evening sound bath.",
      instructors: "Exceptional. John himself teaches regularly and his classes are worth rearranging your schedule for. Every instructor here seems hand-picked for their ability to hold space without ego.",
      vibe: "This is the anti-Equinox. Inclusive, warm, zero pretension. You'll see people of all ages, body types, and experience levels. The community here is real — people actually know each other's names.",
      knowBeforeYouGo: "Some classes are donation-based, which is incredible. Bring your own mat for those. Street parking on Glendale Blvd. The Friday 7 PM sound bath books out — get on it early."
    },
    videoId: null, color: "#A8BFB2",
  },
  {
    id: "s4", name: "Coco House", neighborhood: "West Hollywood", address: "640 N Robertson Blvd, West Hollywood",
    zip: "90069", classTypes: ["LaGree", "Megaformer"], priceRange: "$35–42/class",
    bookingUrl: "#", instagram: "@cocohousela",
    tags: { level: "Intermediate", parking: "Metered Parking" },
    goodToKnow: ["Grip socks required (they sell them)", "Great new client intro rate", "Content-friendly lighting", "Hydrate before — you will sweat"],
    bestFor: "LaGree lovers who want a serious sweat in a space that's actually cute. If you want to shake on the megaformer and look good doing it.",
    rating: 4.7, ratings: { aesthetic: 5.0, music: 4.8, cleanliness: 4.9, difficulty: 4.7, price: 3.8, parking: 3.5 },
    reviewCount: 14,
    gallery: [
      { color: "#E0C8C0", label: "Studio interior" },
      { color: "#D0B8B0", label: "Megaformers" },
      { color: "#D8C0B8", label: "Detail shot" },
      { color: "#E8D0C8", label: "Entrance" },
      { color: "#D4BCB4", label: "Locker area" },
    ],
    heroReview: "Coco House is where I go when I want to feel like I've actually done something. The megaformer classes are brutal in the best way and the studio itself is stunning — all warm neutrals and perfect lighting. My legs were shaking for two days after my first class.",
    sections: {
      space: "Beautiful. Warm terracotta tones, arched doorways, perfectly curated down to the water bottles. This is the studio you'll want to post about — and the workout backs it up. Clean, modern megaformers in a space that feels more boutique hotel than gym.",
      classExperience: "Intense. LaGree on the megaformer is slow, controlled, and absolutely brutal on the muscles. Classes are 50 minutes and you'll feel every second. The slow tempo means you can't fake it — your muscles have nowhere to hide.",
      instructors: "Solid across the board. Energetic, clear cueing, good music. A few standouts who really push you. Could be slightly more attentive to form correction in larger classes.",
      vibe: "Trendy, aesthetically-driven, predominantly female clientele in their 20s–30s. The energy is focused and sweaty. Not a social studio — people come to work.",
      knowBeforeYouGo: "Wear grippy socks (they sell them too). Hydrate beforehand — you will sweat. The evening classes tend to be the most packed. They have a solid new client intro rate."
    },
    videoId: null, color: "#D4A59A",
  },
  {
    id: "s5", name: "P.volve", neighborhood: "West Hollywood", address: "8500 Melrose Ave, West Hollywood",
    zip: "90069", classTypes: ["P.volve Method", "Sculpt", "Stretch & Recovery"], priceRange: "$35–48/class",
    bookingUrl: "#", instagram: "@pvolve",
    tags: { level: "Beginner-Friendly", parking: "Parking Structure" },
    goodToKnow: ["Showers available", "All props provided", "Great digital membership if you want to try at home first", "Give it 3–4 classes — the method has a learning curve"],
    bestFor: "Anyone recovering from injury, dealing with joint issues, or who wants a smart, functional approach to strength. Also great if you're burned out on high-intensity everything.",
    rating: 4.5, ratings: { aesthetic: 4.7, music: 3.8, cleanliness: 5.0, difficulty: 3.5, price: 3.5, parking: 4.2 },
    reviewCount: 11,
    gallery: [
      { color: "#C8D4B8", label: "Main studio" },
      { color: "#B8C4A8", label: "Equipment wall" },
      { color: "#D0DCC0", label: "Stretch area" },
    ],
    heroReview: "P.volve changed how I think about working out. After years of high-intensity everything, my body was breaking down. Their functional method actually fixed my hip pain AND made me stronger. It doesn't look hard but you will be sore. Trust the process.",
    sections: {
      space: "Sleek and clinical in the best way. The WeHo flagship feels like a high-end physical therapy clinic crossed with a boutique studio. Bright, clean, well-organized equipment stations. The props (P.ball, P.band, etc.) are unique to the method.",
      classExperience: "Unlike anything else in LA. The P.volve method focuses on functional movement patterns — rotational work, hip stabilization, ankle mobility. It looks gentle but targets deep stabilizers you've been ignoring. Classes range from sculpt (more intense) to stretch & recovery.",
      instructors: "Knowledgeable about anatomy and movement science. Less 'hype' energy and more clinical precision. They'll explain why you're doing each movement, which is refreshing.",
      vibe: "Calm, intentional, almost meditative. The clientele includes post-injury recovery people, former athletes, and wellness-forward women who've graduated from the 'go hard or go home' mentality. Not a party.",
      knowBeforeYouGo: "Start with the intro assessment if they offer one. The method has a learning curve — give it 3–4 classes before judging. Their digital membership is actually great if you want to try at home first."
    },
    videoId: null, color: "#B8C4A0",
  },
  {
    id: "s6", name: "Oblix Fitness", neighborhood: "Culver City", address: "9500 Culver Blvd, Culver City",
    zip: "90232", classTypes: ["Sculpt", "HIIT", "Full Body", "Abs & Booty"], priceRange: "$30–38/class",
    bookingUrl: "#", instagram: "@oblixfitness",
    tags: { level: "All Levels", parking: "Parking Structure" },
    goodToKnow: ["Bring a towel — you will drip", "Great new member deals", "6 PM classes have the best energy", "Playlists are genuinely incredible"],
    bestFor: "The person who wants a full-body sculpt workout with great music and high energy. If you miss the energy of a group fitness class with a DJ-level playlist.",
    rating: 4.6, ratings: { aesthetic: 4.3, music: 5.0, cleanliness: 4.4, difficulty: 4.5, price: 4.6, parking: 4.5 },
    reviewCount: 16,
    gallery: [
      { color: "#C0B0D0", label: "Main floor" },
      { color: "#B0A0C0", label: "Weight station" },
      { color: "#D0C0E0", label: "Entrance" },
      { color: "#C8B8D8", label: "Class energy" },
    ],
    heroReview: "Oblix is the workout I never want to skip. The playlists alone are worth showing up for, and the sculpt format hits everything without destroying your joints. It's intense but fun — you forget you're suffering because the energy is so good.",
    sections: {
      space: "Industrial-chic with moody lighting. Dark walls, good speakers, the kind of studio that feels like a workout even when you walk in. Not the most spacious but the lighting and sound design create an immersive vibe.",
      classExperience: "Music-driven sculpt that combines light weights, resistance bands, bodyweight, and targeted core work. Fast transitions keep your heart rate up. The full body format is their signature — 50 minutes, no muscle group left behind.",
      instructors: "High energy, motivational, great music taste. They bring the party while still keeping you honest on form. The best instructors here have a cult following for a reason.",
      vibe: "Social, sweaty, communal suffering in the best way. People high-five after class. The post-workout glow in the lobby is real. This is fitness as a group experience.",
      knowBeforeYouGo: "Bring a towel — you will drip. The 6 PM classes are the most electric. They run deals for new members regularly. Parking at Platform LA is easy."
    },
    videoId: null, color: "#C9A8D2",
  },
  {
    id: "s7", name: "Drenched Fitness", neighborhood: "Venice", address: "1041 Abbot Kinney Blvd, Venice",
    zip: "90291", classTypes: ["Rowing + Sculpt", "Full Body", "Cardio Sculpt"], priceRange: "$32–40/class",
    bookingUrl: "#", instagram: "@drenchedfitness",
    tags: { level: "All Levels", parking: "Metered Parking" },
    goodToKnow: ["First-timer friendly — they'll teach you rowing form", "Bluestone Lane coffee next door", "Bike or walk if you can — Abbot Kinney parking is chaos", "Watch a rowing form video before your first class"],
    bestFor: "Anyone bored of the same formats. If you've never tried rowing-based fitness, this is the place to start. The Abbot Kinney location is a bonus.",
    rating: 4.7, ratings: { aesthetic: 4.5, music: 4.4, cleanliness: 4.6, difficulty: 4.3, price: 4.3, parking: 3.2 },
    reviewCount: 13,
    gallery: [
      { color: "#D8D0C0", label: "Rower lineup" },
      { color: "#C8C0B0", label: "Floor station" },
      { color: "#E0D8C8", label: "Abbot Kinney entrance" },
      { color: "#D0C8B8", label: "Post-class" },
    ],
    heroReview: "I had never touched a rowing machine before Drenched and now I'm obsessed. The format alternates between rowing intervals and floor sculpt work, so you get cardio AND toning without it feeling like a slog. Plus — Abbot Kinney coffee after? Come on.",
    sections: {
      space: "Clean, bright, Venice-appropriate. Water Rowers line one side, floor stations on the other. The Abbot Kinney location means you're steps from the best post-workout coffee and matcha in the city. Natural light, good energy.",
      classExperience: "The rowing + sculpt split is genius. You alternate between timed rowing intervals (great low-impact cardio) and floor work with weights and bands. It's total body without being repetitive. The format keeps you engaged the whole time.",
      instructors: "Encouraging and clear. They'll teach you proper rowing form if you're new — don't be intimidated. Good energy without being over-the-top.",
      vibe: "Venice casual. The clientele is a mix of fitness regulars and people discovering rowing for the first time. Friendly, laid-back, no attitude. The kind of studio where you feel comfortable showing up alone.",
      knowBeforeYouGo: "The rowers have a learning curve — watch a quick form video before your first class or arrive 5 minutes early. Metered parking on Abbot Kinney, free on side streets. Post-class, hit Bluestone Lane next door."
    },
    videoId: null, color: "#D4C1A1",
  },
  {
    id: "s8", name: "The Pilates Cave", neighborhood: "Brentwood", address: "11740 San Vicente Blvd, Brentwood",
    zip: "90049", classTypes: ["Reformer", "Private Sessions", "Duets"], priceRange: "$45–65/class",
    bookingUrl: "#", instagram: "@thepilatescave",
    tags: { level: "Intermediate+", parking: "Street Parking" },
    goodToKnow: ["Max 6 people per class — book well in advance", "Grip socks required", "No showers", "Worth every penny — closest thing to a private session"],
    bestFor: "The person who wants the closest thing to a private Pilates session in a group setting. If you're willing to pay more for fewer people and better attention.",
    rating: 4.9, ratings: { aesthetic: 4.3, music: 4.0, cleanliness: 4.8, difficulty: 4.8, price: 3.2, parking: 4.0 },
    reviewCount: 8,
    gallery: [
      { color: "#D0C4A8", label: "Studio interior" },
      { color: "#C0B498", label: "Reformers" },
      { color: "#D8CCB0", label: "Detail" },
    ],
    heroReview: "The Pilates Cave is my secret and I almost don't want to share it. Max 6 people per class, instructors who trained under master teachers, and the kind of attention you'd normally pay private-session prices for. Worth every penny.",
    sections: {
      space: "Small, intentional, cave-like in the coziest way. Warm lighting, max 6 reformers. It feels private even in a group class. Not flashy or Instagram-ready — just a beautiful, focused space to do the work.",
      classExperience: "The closest thing to private Pilates you'll get in a group format. With only 6 people, the instructor is essentially coaching you individually. Classes are technically demanding and deeply satisfying. You'll learn more about your body in one class here than a month elsewhere.",
      instructors: "Master-level. Multiple instructors trained under Romana Kryzanowska lineage. They see everything, correct everything, and elevate your practice immediately. This is where LA's serious Pilates people go.",
      vibe: "Quiet, focused, almost reverent. The small class size creates an intimacy that changes the experience. People here are committed to their practice. Zero performative energy.",
      knowBeforeYouGo: "Book well in advance — with only 6 spots, classes fill fast. The pricing reflects the quality and attention. Street parking on San Vicente. If you've only done big-studio reformer, this will redefine Pilates for you."
    },
    videoId: null, color: "#C4B08B",
  },
  {
    id: "s9", name: "Mighty Pilates", neighborhood: "Venice", address: "1716 Pacific Ave, Venice",
    zip: "90291", classTypes: ["Lagree", "Megaformer", "Stretch"], priceRange: "$30–40/class",
    bookingUrl: "#", instagram: "@mightypilates",
    tags: { level: "All Levels", parking: "Bike/Walk Recommended" },
    goodToKnow: ["Best value megaformer in LA", "Great class pack pricing", "Grip socks required", "Morning classes are less crowded"],
    bestFor: "Venice locals who want a solid megaformer class without the pretension or the price tag. Great for Lagree beginners.",
    rating: 4.5, ratings: { aesthetic: 3.8, music: 4.2, cleanliness: 4.2, difficulty: 4.4, price: 5.0, parking: 3.0 },
    reviewCount: 15,
    gallery: [
      { color: "#B8D0D0", label: "Main room" },
      { color: "#A8C0C0", label: "Megaformers" },
      { color: "#C8D8D8", label: "Exterior" },
    ],
    heroReview: "Mighty Pilates is the best value megaformer in LA, full stop. The classes are tough, the vibe is chill, and it's priced like a normal human can actually go regularly. Venice energy, no attitude, real results.",
    sections: {
      space: "Casual, beachy, unpretentious. It's not the most polished studio on this list but it's clean, well-equipped, and the Venice location gives it character. Megaformers are well-maintained.",
      classExperience: "Solid Lagree method on megaformers. Classes are challenging and effective. Good variety between full body, lower body focus, and stretch recovery options. Instructors offer modifications and progressions.",
      instructors: "Friendly and knowledgeable. Not the most hands-on correction but they demo well and keep the class moving. The regulars have their favorite instructors — ask around.",
      vibe: "Venice casual to the core. Flip-flop-to-megaformer pipeline. The clientele is local, unpretentious, and consistent. People say hi, nobody judges. It's fitness without the performance.",
      knowBeforeYouGo: "Best value in LA for megaformer — their class packs are very reasonable. Parking can be Venice-level annoying, so bike or walk if you can. The morning classes are less crowded."
    },
    videoId: null, color: "#B0C4C4",
  },
];

const NEIGHBORHOODS = ["West Hollywood","Santa Monica","Venice","Culver City","Malibu","Silver Lake","Brentwood","Topanga"];

const CLASS_TYPES = ["Reformer","Mat","Megaformer","LaGree","Sculpt","Vinyasa","HIIT","Rowing","Breathwork","Sound Bath","Meditation"];

const COMMUNITY_REVIEWS = {
  s1: [
    { id:"cr1", name:"Sophie L.", date:"2026-03-15", rating:5, text:"Alexa's 7AM reformer is the only class I will wake up early for. She remembers everyone's name and injuries. The studio is small which I love — nowhere to hide but also very personal.", classType:"Reformer", instructor:"Alexa" },
    { id:"cr2", name:"Maya P.", date:"2026-03-10", rating:5, text:"I've done Pilates in NYC, London, and LA. Spear is in my top 3 globally. Classical training, real corrections, and you walk out taller. Not the prettiest studio but who cares.", classType:"Reformer", instructor:"James" },
    { id:"cr3", name:"Ava C.", date:"2026-03-02", rating:4, text:"Really solid reformer work. Instructors are clearly well-trained. My only gripe is parking — I was 5 min late because I circled the block three times. Worth it though.", classType:"Reformer", instructor:"Sarah" },
    { id:"cr4", name:"Priya D.", date:"2026-02-28", rating:5, text:"Just did my 50th class here and it's still challenging me. The tower classes are underrated — try one if you haven't.", classType:"Tower", instructor:"James" },
  ],
  s2: [
    { id:"cr5", name:"Tessa C.", date:"2026-03-14", rating:5, text:"This studio is SO pretty. The natural light alone is worth the drive. Great for beginners — I brought my mom and she loved it.", classType:"Reformer", instructor:"Carly" },
    { id:"cr6", name:"Nina J.", date:"2026-03-08", rating:4, text:"Beautiful space, nice instructors, good workout. Not the most challenging if you're advanced but perfect for a mellow Saturday morning.", classType:"Sculpt Reformer", instructor:"Jen" },
    { id:"cr7", name:"Zara O.", date:"2026-02-20", rating:4, text:"The post-class beach walk is truly the move. Studio is gorgeous. Would love slightly harder class options for experienced people.", classType:"Reformer", instructor:"Carly" },
  ],
  s3: [
    { id:"cr8", name:"Camille D.", date:"2026-03-16", rating:5, text:"I've been coming to YJOH for two years and it genuinely changed my relationship with yoga. John's classes are a spiritual experience. The donation-based model makes it accessible which matters.", classType:"Vinyasa", instructor:"John" },
    { id:"cr9", name:"Bella R.", date:"2026-03-12", rating:5, text:"The Friday sound bath is the best thing I do for myself all week. Bring a blanket, close your eyes, and let go. This place is magic.", classType:"Sound Bath", instructor:"Luna" },
    { id:"cr10", name:"Kira V.", date:"2026-03-05", rating:5, text:"Most inclusive yoga studio I've ever been to. All ages, all body types, zero judgment. The community here is real.", classType:"Vinyasa", instructor:"John" },
    { id:"cr11", name:"Isla T.", date:"2026-02-25", rating:4, text:"Love the vibe and the teachers but the space is pretty small. Can feel crowded in popular classes. Get there early for a good spot.", classType:"Power Yoga", instructor:"Mika" },
  ],
  s4: [
    { id:"cr12", name:"Luna R.", date:"2026-03-13", rating:5, text:"My legs are still shaking from Wednesday's class. Coco House is no joke. The studio is gorgeous and the megaformer workout is the most effective sculpting format I've tried.", classType:"Megaformer", instructor:"Ana" },
    { id:"cr13", name:"Jade N.", date:"2026-03-06", rating:4, text:"Beautiful studio, great workout, but it's pricey. I go once a week as a treat. The lighting and aesthetic are A+.", classType:"Megaformer", instructor:"Taylor" },
    { id:"cr14", name:"Elise M.", date:"2026-02-22", rating:5, text:"Best megaformer in WeHo, don't @ me. Ana's evening class is chef's kiss. Grippy socks are a MUST.", classType:"Megaformer", instructor:"Ana" },
  ],
  s5: [
    { id:"cr15", name:"Noa F.", date:"2026-03-11", rating:4, text:"P.volve fixed my hip flexor issue that two PTs couldn't figure out. The method is unique — give it at least 3 classes before judging. It looks easy, it is not.", classType:"P.volve Method", instructor:"Alex" },
    { id:"cr16", name:"Freya A.", date:"2026-03-01", rating:4, text:"Really different from anything else in LA. More rehab-meets-fitness than traditional workout. I appreciate the science behind it. Music could be better though.", classType:"Sculpt", instructor:"Jordan" },
  ],
  s6: [
    { id:"cr17", name:"Dani M.", date:"2026-03-15", rating:5, text:"The playlist at Oblix is unmatched. I literally added 6 songs to my Spotify after class. Oh and the workout is great too lol", classType:"Full Body", instructor:"Marcus" },
    { id:"cr18", name:"Carmen D.", date:"2026-03-09", rating:4, text:"High energy, great music, solid total body workout. Not the fanciest studio but the vibe more than makes up for it. Evening classes are electric.", classType:"Sculpt", instructor:"Bri" },
    { id:"cr19", name:"Yuki T.", date:"2026-02-27", rating:5, text:"Brought 4 friends last weekend and they're all hooked now. Oblix is the most fun you can have working out. People actually high-five after class and it's not weird.", classType:"HIIT", instructor:"Marcus" },
  ],
  s7: [
    { id:"cr20", name:"Mila S.", date:"2026-03-14", rating:5, text:"Never tried rowing before Drenched and now I'm 3x a week. The format keeps you engaged and the Abbot Kinney location is unbeatable. Bluestone Lane cold brew after = the routine.", classType:"Rowing + Sculpt", instructor:"Sam" },
    { id:"cr21", name:"Sienna R.", date:"2026-03-07", rating:4, text:"Great concept, great location. Rowing is surprisingly low impact on joints while being high effort. My only note is parking on Abbot Kinney is chaos — bike if you can.", classType:"Rowing + Sculpt", instructor:"Kai" },
  ],
  s8: [
    { id:"cr22", name:"Bianca R.", date:"2026-03-12", rating:5, text:"The Pilates Cave is the IYKYK studio. 6 person classes, master-level instructors, and you will learn more about your body in one class here than a month at a big studio. Worth every dollar.", classType:"Reformer", instructor:"Maria" },
    { id:"cr23", name:"Emi S.", date:"2026-03-03", rating:5, text:"I drove from the Valley for this class and would do it again. The small group size means you basically get a private session. Maria is a genius.", classType:"Reformer", instructor:"Maria" },
  ],
  s9: [
    { id:"cr24", name:"Riley B.", date:"2026-03-13", rating:4, text:"Best bang for your buck megaformer in LA. Not the fanciest but who cares when the class is solid and the price is right. Venice vibes, zero attitude.", classType:"Megaformer", instructor:"Tony" },
    { id:"cr25", name:"Harper Q.", date:"2026-03-04", rating:5, text:"I can actually afford to go to Mighty 3x a week which has made all the difference. The results from consistent megaformer work are insane. Love this place.", classType:"Lagree", instructor:"Amy" },
    { id:"cr26", name:"Aisha O.", date:"2026-02-19", rating:4, text:"Solid no-frills megaformer studio. Instructors are friendly, classes are challenging. Just wish they had a parking lot — Venice street parking is always a gamble.", classType:"Megaformer", instructor:"Tony" },
  ],
};

// ─── HELPERS ─────────────────────────────────────────────────
function StarRating({ rating, count, size="sm" }) {
  const lg = size==="lg";
  const full = Math.floor(rating);
  const half = rating-full>=0.3;
  return (
    <div style={{display:"flex",alignItems:"center",gap:lg?6:4}}>
      <div style={{display:"flex",gap:0.5,letterSpacing:1}}>
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{fontSize:lg?"1rem":"0.72rem",color:i<=full||(i===full+1&&half)?BRAND.star:"rgba(44,37,34,0.15)"}}>{i<=full?"★":(i===full+1&&half?"★":"★")}</span>
        ))}
      </div>
      <span style={{fontSize:lg?"1.1rem":"0.78rem",fontWeight:600,color:BRAND.text}}>{rating}</span>
      {count!==undefined && <span style={{fontSize:lg?"0.85rem":"0.68rem",color:BRAND.textLight}}>({count} review{count!==1?"s":""})</span>}
    </div>
  );
}

function SubRating({ label, value, icon }) {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 0"}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        {icon && <span style={{fontSize:"0.7rem",opacity:0.3,width:16,textAlign:"center"}}>{icon}</span>}
        <span style={{fontSize:"0.84rem",color:"rgba(44,37,34,0.65)"}}>{label}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:110,height:5,borderRadius:3,background:"rgba(44,37,34,0.06)",overflow:"hidden"}}>
          <div style={{height:"100%",borderRadius:3,background: value >= 4.5 ? "#8C2D32" : value >= 3.5 ? "#D4C1A1" : "#D4C4B0",width:`${(value/5)*100}%`,transition:"width 0.6s ease"}} />
        </div>
        <span style={{fontSize:"0.8rem",fontWeight:600,color:"#2C2522",minWidth:26,textAlign:"right"}}>{value}</span>
      </div>
    </div>
  );
}

function smartStudioSearch(query, studios) {
  const q = query.toLowerCase().trim();
  if (!q) return studios;

  // Zip code detection
  const zipMatch = q.match(/\b(\d{5})\b/);

  // Category keywords
  const catMap = {
    reformer:["reformer","pilates reform"],
    megaformer:["megaformer","lagree","mega"],
    pilates:["pilates","mat pilates"],
    sculpt:["sculpt","toning","strength","sculpting"],
    yoga:["yoga","vinyasa","power yoga"],
    hiit:["hiit","high intensity","cardio"],
    rowing:["rowing","row","rower"],
    "sound bath":["sound bath","sound healing"],
    meditation:["meditation","meditate","breathwork"],
  };
  let matchedTypes = [];
  for (const [type,kws] of Object.entries(catMap)) {
    if (kws.some(k=>q.includes(k))) matchedTypes.push(type);
  }

  // Neighborhood detection
  let matchedHood = null;
  for (const n of NEIGHBORHOODS) { if (q.includes(n.toLowerCase())) { matchedHood=n; break; } }
  if (q.includes("weho")||q.includes("west ho")) matchedHood="West Hollywood";
  if (q.includes("silverlake")||q.includes("silver lake")) matchedHood="Silver Lake";

  // Near me (default to showing all, sorted by rating)
  const isNearMe = q.includes("near me") || q.includes("nearby") || q.includes("close to me");

  // Tag/vibe matching
  const vibeWords = ["chill","intense","beginner","advanced","affordable","luxury","community","intimate","aesthetic","sweaty","low impact","challenging"];
  const matchedVibes = vibeWords.filter(v => q.includes(v));

  // Filter
  let results = studios;

  if (zipMatch) {
    results = results.filter(s => s.zip === zipMatch[1]);
  }
  if (matchedHood) {
    results = results.filter(s => s.neighborhood === matchedHood);
  }
  if (matchedTypes.length > 0) {
    results = results.filter(s => {
      const sTypes = s.classTypes.map(t=>t.toLowerCase()).join(" ") + " " + s.tags.join(" ");
      return matchedTypes.some(mt => sTypes.includes(mt));
    });
  }
  if (matchedVibes.length > 0) {
    results = results.filter(s => {
      const allText = [s.tags.level, s.tags.parking, ...(s.goodToKnow||[]), s.bestFor].join(" ").toLowerCase();
      return matchedVibes.some(v => allText.includes(v));
    });
  }

  // Fallback text search if no smart matches
  if (results.length === 0 || (!matchedHood && matchedTypes.length === 0 && !zipMatch && matchedVibes.length === 0 && !isNearMe)) {
    results = studios.filter(s => {
      const allText = [s.tags.level, s.tags.parking, s.name, s.neighborhood, ...(s.goodToKnow||[]), s.bestFor, ...s.classTypes].join(" ").toLowerCase();
      return allText.includes(q);
    });
  }

  return results.sort((a,b) => b.rating - a.rating);
}

// ─── MAIN APP ────────────────────────────────────────────────
export default function App() {
  const [page,setPage] = useState("home");
  const [pageArg,setPageArg] = useState(null);
  const [searchQuery,setSearchQuery] = useState("");
  const [mobileMenu,setMobileMenu] = useState(false);
  const [communityReviews,setCommunityReviews] = useState(COMMUNITY_REVIEWS);

  function navigate(p,arg=null) { setPage(p); setPageArg(arg); setMobileMenu(false); window.scrollTo({top:0,behavior:"instant"}); }
  function searchAndGo(q) { setSearchQuery(q); navigate("search",q); }
  function addReview(studioId, review) {
    setCommunityReviews(prev => ({...prev, [studioId]: [review, ...(prev[studioId]||[])]}));
  }

  return (
    <div style={{minHeight:"100vh",background:BRAND.bg,color:BRAND.text,fontFamily:"'Outfit','DM Sans',sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      <Nav currentPage={page} navigate={navigate} searchAndGo={searchAndGo} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <main style={{paddingTop:72}}>
        {page==="home" && <HomePage navigate={navigate} searchAndGo={searchAndGo} />}
        {page==="search" && <SearchPage query={pageArg} navigate={navigate} searchAndGo={searchAndGo} />}
        {page==="studio" && <StudioPage studioId={pageArg} navigate={navigate} communityReviews={communityReviews} addReview={addReview} />}
        {page==="glossary" && <GlossaryPage navigate={navigate} />}
        {page==="about" && <AboutPage navigate={navigate} searchAndGo={searchAndGo} />}
      </main>
      <footer style={{borderTop:"1px solid rgba(44,37,34,0.06)",padding:"40px clamp(16px,4vw,48px) 28px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16,fontSize:"0.78rem",color:"rgba(44,37,34,0.4)"}}>
        <div>
          <div style={{marginBottom:8}}><BookdLogo height={18} /></div>
          <div>Honest wellness reviews for LA.</div>
          <div style={{marginTop:6}}><a href="mailto:bookdwithus@gmail.com" style={{color:BRAND.red,textDecoration:"none"}}>bookdwithus@gmail.com</a></div>
        </div>
        <div style={{display:"flex",gap:20}}><span style={{cursor:"pointer"}} onClick={()=>navigate("home")}>Home</span><span style={{cursor:"pointer"}} onClick={()=>navigate("about")}>Our Story</span><span style={{cursor:"pointer"}} onClick={()=>navigate("glossary")}>How We Rate</span><a href="https://instagram.com/bookdwithus" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"none"}}>Instagram</a><a href="https://tiktok.com/@bookdwithus" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"none"}}>TikTok</a></div>
      </footer>
      <style>{`
        ::selection { background: rgba(196,168,139,0.25); }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────
function Nav({ currentPage, navigate, searchAndGo, mobileMenu, setMobileMenu }) {
  const [q,setQ] = useState("");
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,height:72,background:"rgba(254,235,171,0.95)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(140,45,50,0.08)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(16px,4vw,48px)",gap:16}}>
      <div onClick={()=>navigate("home")} style={{cursor:"pointer",flexShrink:0}}>
        <BookdLogo height={24} />
      </div>
      {/* Search bar in nav */}
      <div style={{flex:"1 1 300px",maxWidth:480,position:"relative"}} className="nav-search">
        <input type="text" value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&q.trim()){searchAndGo(q.trim());setQ("");}}}
          placeholder='Try "pilates in West Hollywood"'
          style={{width:"100%",background:"rgba(44,37,34,0.04)",border:"1px solid rgba(44,37,34,0.06)",borderRadius:100,padding:"10px 16px 10px 38px",fontSize:"0.84rem",color:"#2C2522",outline:"none",fontFamily:"inherit"}} />
        <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",opacity:0.25,fontSize:"0.9rem",pointerEvents:"none"}}>⌕</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:20,fontSize:"0.84rem",fontWeight:600,flexShrink:0,color:BRAND.red}} className="nd">
        <span onClick={()=>navigate("home")} style={{cursor:"pointer",opacity:currentPage==="home"?1:0.55}}>Home</span>
        <span onClick={()=>searchAndGo("")} style={{cursor:"pointer",opacity:currentPage==="search"?1:0.55}}>All Studios</span>
        <span onClick={()=>navigate("glossary")} style={{cursor:"pointer",opacity:currentPage==="glossary"?1:0.55}}>How We Rate</span>
        <span onClick={()=>navigate("about")} style={{cursor:"pointer",opacity:currentPage==="about"?1:0.55}}>Our Story</span>
      </div>
      <div className="nm" onClick={()=>setMobileMenu(!mobileMenu)} style={{cursor:"pointer",padding:8,display:"none",flexDirection:"column",gap:4}}>
        <div style={{width:20,height:2,background:BRAND.red,borderRadius:1}} /><div style={{width:20,height:2,background:BRAND.red,borderRadius:1}} /><div style={{width:14,height:2,background:BRAND.red,borderRadius:1}} />
      </div>
      {mobileMenu && <div style={{position:"absolute",top:72,left:0,right:0,background:"rgba(254,235,171,0.98)",backdropFilter:"blur(16px)",padding:"16px clamp(16px,4vw,48px) 20px",display:"flex",flexDirection:"column",gap:14,fontSize:"0.95rem",fontWeight:600,borderBottom:"1px solid rgba(140,45,50,0.08)",color:BRAND.red}}>
        <span onClick={()=>{navigate("home");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>Home</span>
        <span onClick={()=>{searchAndGo("");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>All Studios</span>
        <span onClick={()=>{navigate("glossary");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>How We Rate</span>
        <span onClick={()=>{navigate("about");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>Our Story</span>
      </div>}
      <style>{`@media(max-width:640px){.nd{display:none!important}.nm{display:flex!important}.nav-search{max-width:200px!important}}`}</style>
    </nav>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────
function HomePage({ navigate, searchAndGo }) {
  const [heroSearch,setHeroSearch] = useState("");
  const topPicks = STUDIOS.filter(s=>s.rating>=4.8).slice(0,3);
  const QUICK = ["Pilates in West Hollywood","Megaformer near me","Yoga in Silver Lake","Sculpt in Culver City","Reformer in Santa Monica","Rowing in Venice"];

  return <div>
    {/* Hero */}
    <section style={{padding:"clamp(56px,12vw,120px) clamp(16px,4vw,48px) clamp(48px,8vw,80px)",textAlign:"center",maxWidth:760,margin:"0 auto"}}>
      <div style={{marginBottom:20,display:"flex",justifyContent:"center"}}><BookdLogo height={48} /></div>
      <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(2.2rem,6vw,3.6rem)",fontWeight:400,letterSpacing:"-0.03em",lineHeight:1.08,marginBottom:20}}>
        workout with us.<br/><span style={{fontStyle:"italic",color:BRAND.red}}>your trusted studio tour guides.</span>
      </div>
      <p style={{fontSize:"clamp(0.95rem,2vw,1.1rem)",color:BRAND.textMid,lineHeight:1.7,maxWidth:520,margin:"0 auto 36px",fontWeight:300}}>
        Search and discover boutique fitness studios across LA. Read honest reviews, compare ratings, and find the right class for you — all in one place.
      </p>
      {/* Search bar */}
      <div style={{maxWidth:520,margin:"0 auto 24px",position:"relative"}}>
        <input type="text" value={heroSearch} onChange={e=>setHeroSearch(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&heroSearch.trim())searchAndGo(heroSearch.trim());}}
          placeholder='Search "reformer in Brentwood" or "90069"'
          style={{width:"100%",background:"#fff",border:"1px solid rgba(44,37,34,0.1)",borderRadius:100,padding:"16px 56px 16px 24px",fontSize:"0.95rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxShadow:"0 2px 16px rgba(44,37,34,0.04)"}} />
        <button onClick={()=>{if(heroSearch.trim())searchAndGo(heroSearch.trim());}} style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:BRAND.red,color:"#FFF",border:"none",borderRadius:"50%",width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1rem"}}>↗</button>
      </div>
      {/* Quick searches */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
        {QUICK.map((q,i) => (
          <button key={i} onClick={()=>searchAndGo(q)} style={{background:"rgba(44,37,34,0.04)",border:"1px solid rgba(44,37,34,0.06)",borderRadius:100,padding:"8px 16px",fontSize:"0.78rem",cursor:"pointer",fontFamily:"inherit",color:"rgba(44,37,34,0.6)",transition:"all 0.15s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";e.currentTarget.style.borderColor="#2C2522";}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(44,37,34,0.04)";e.currentTarget.style.color="rgba(44,37,34,0.6)";e.currentTarget.style.borderColor="rgba(44,37,34,0.06)";}}>{q}</button>
        ))}
      </div>
    </section>

    {/* bookd picks */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
        <span style={{background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"4px 12px",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}}>✦ bookd picks</span>
      </div>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:400,marginBottom:6}}>Studios we love right now</h2>
      <p style={{fontSize:"0.88rem",color:BRAND.textLight,marginBottom:28,fontWeight:300}}>The ones we keep going back to. — S & S</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))",gap:20}}>
        {topPicks.map(s => <StudioCard key={s.id} studio={s} navigate={navigate} featured />)}
      </div>
    </section>

    {/* Browse by neighborhood */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6}}>Browse by neighborhood</h2>
      <p style={{fontSize:"0.88rem",color:BRAND.textLight,marginBottom:24,fontWeight:300}}>We've been everywhere so you don't have to.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,160px),1fr))",gap:10}}>
        {NEIGHBORHOODS.map(n => {
          const count = STUDIOS.filter(s=>s.neighborhood===n).length;
          return <div key={n} onClick={()=>searchAndGo(n)} style={{background:"#fff",border:"1px solid rgba(44,37,34,0.06)",borderRadius:14,padding:"18px 16px",cursor:"pointer",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#2C2522";}}>
            <div style={{fontSize:"0.9rem",fontWeight:500,marginBottom:4}}>{n}</div>
            <div style={{fontSize:"0.72rem",opacity:0.5}}>{count} studio{count!==1?"s":""} reviewed</div>
          </div>;
        })}
      </div>
    </section>

    {/* Browse by class type */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6}}>Search by class type</h2>
      <p style={{fontSize:"0.88rem",color:"rgba(44,37,34,0.45)",marginBottom:24,fontWeight:300}}>Find exactly what you're looking for.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
        {CLASS_TYPES.map(t => (
          <button key={t} onClick={()=>searchAndGo(t)} style={{background:"#fff",border:"1px solid rgba(44,37,34,0.08)",borderRadius:100,padding:"10px 20px",fontSize:"0.84rem",cursor:"pointer",fontFamily:"inherit",color:"#2C2522",transition:"all 0.15s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#2C2522";}}>{t}</button>
        ))}
      </div>
    </section>

    {/* Meet your reviewers */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{background:BRAND.butterLight,borderRadius:20,padding:"clamp(28px,4vw,40px)",display:"flex",alignItems:"center",gap:"clamp(20px,4vw,40px)",flexWrap:"wrap"}}>
        <div style={{display:"flex",gap:12,flexShrink:0}}>
          <div style={{width:52,height:52,borderRadius:"50%",background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.95rem",fontWeight:600}}>S</div>
          <div style={{width:52,height:52,borderRadius:"50%",background:BRAND.butter,border:`2px solid ${BRAND.red}`,display:"flex",alignItems:"center",justifyContent:"center",color:BRAND.red,fontSize:"0.95rem",fontWeight:600,marginLeft:-20}}>S</div>
        </div>
        <div style={{flex:1,minWidth:200}}>
          <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.1rem,2.5vw,1.4rem)",fontWeight:400,marginBottom:4}}>We're Sydney & Sam.</div>
          <p style={{fontSize:"0.85rem",color:BRAND.textMid,lineHeight:1.6,fontWeight:300,marginBottom:12}}>Two best friends who turned their studio obsession into a guide. We take the classes, form the opinions, and tell you exactly what we think — the vibe, the instructor, the playlist, and whether the parking situation is acceptable.</p>
          <span onClick={()=>navigate("about")} style={{fontSize:"0.82rem",color:BRAND.red,cursor:"pointer",fontWeight:500}}>Read our story →</span>
        </div>
      </div>
    </section>

    {/* All studios */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 80px",maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6}}>All reviewed studios</h2>
      <p style={{fontSize:"0.88rem",color:"rgba(44,37,34,0.45)",marginBottom:28,fontWeight:300}}>{STUDIOS.length} studios reviewed and counting.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))",gap:20}}>
        {STUDIOS.sort((a,b)=>b.rating-a.rating).map(s => <StudioCard key={s.id} studio={s} navigate={navigate} />)}
      </div>
    </section>
  </div>;
}

// ─── STUDIO CARD ─────────────────────────────────────────────
function StudioCard({ studio, navigate, featured=false }) {
  const s = studio;
  return (
    <div onClick={()=>navigate("studio",s.id)} style={{background:"#fff",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"transform 0.2s,box-shadow 0.2s",boxShadow:"0 1px 3px rgba(44,37,34,0.03)",border:featured?"1px solid rgba(140,45,50,0.2)":"1px solid rgba(44,37,34,0.05)",position:"relative",animation:"fadeUp 0.4s ease both"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(44,37,34,0.08)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 1px 3px rgba(44,37,34,0.03)";}}>
      {/* Color header */}
      <div style={{height:8,background:BRAND.red}} />
      {featured && s.rating>=4.8 && <div style={{position:"absolute",top:18,right:14,background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"3px 10px",fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase"}}>bookd pick</div>}
      <div style={{padding:"20px 22px 22px"}}>
        {/* Name + neighborhood */}
        <div style={{fontSize:"1.05rem",fontWeight:600,marginBottom:4,letterSpacing:"-0.01em"}}>{s.name}</div>
        <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.45)",marginBottom:10}}>{s.neighborhood} · {s.priceRange}</div>
        {/* Rating */}
        <div style={{marginBottom:12}}><StarRating rating={s.rating} count={s.reviewCount} /></div>
        {/* Tags */}
        <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:14}}>
          <span style={{background:"rgba(140,45,50,0.1)",borderRadius:100,padding:"3px 10px",fontSize:"0.68rem",color:"#8C2D32",fontWeight:500}}>{s.tags.level}</span>
          <span style={{background:"rgba(44,37,34,0.04)",borderRadius:100,padding:"3px 10px",fontSize:"0.68rem",color:"rgba(44,37,34,0.5)",display:"flex",alignItems:"center",gap:4}}>
            <span style={{fontSize:"0.6rem",opacity:0.5}}>P</span> {s.tags.parking}
          </span>
        </div>
        {/* Review snippet */}
        <div style={{fontSize:"0.8rem",color:"rgba(44,37,34,0.55)",fontStyle:"italic",lineHeight:1.6,fontWeight:300,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:14}}>
          "{s.heroReview}"
        </div>
        {/* Class types */}
        <div style={{fontSize:"0.72rem",color:"rgba(44,37,34,0.4)",display:"flex",gap:6,flexWrap:"wrap"}}>
          {s.classTypes.map((t,i) => <span key={i}>{i>0?"·":""} {t}</span>)}
        </div>
      </div>
    </div>
  );
}

// ─── SEARCH PAGE ─────────────────────────────────────────────
function SearchPage({ query, navigate, searchAndGo }) {
  const [localQ,setLocalQ] = useState(query||"");
  const results = useMemo(() => smartStudioSearch(localQ, STUDIOS), [localQ]);

  useEffect(() => { setLocalQ(query||""); }, [query]);

  return <div style={{padding:"32px clamp(16px,4vw,48px) 80px",maxWidth:1100,margin:"0 auto"}}>
    {/* Search bar */}
    <div style={{maxWidth:560,marginBottom:32,position:"relative"}}>
      <input type="text" value={localQ} onChange={e=>{setLocalQ(e.target.value);}} onKeyDown={e=>{if(e.key==="Enter")searchAndGo(localQ);}}
        placeholder='Search by studio, class type, neighborhood, or zip code...'
        style={{width:"100%",background:"#fff",border:"1px solid rgba(44,37,34,0.1)",borderRadius:100,padding:"14px 20px 14px 42px",fontSize:"0.9rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxShadow:"0 1px 8px rgba(44,37,34,0.03)"}} />
      <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",opacity:0.25,fontSize:"0.95rem"}}>⌕</span>
    </div>

    {/* Results header */}
    <div style={{marginBottom:24}}>
      <h1 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.4rem,3vw,1.8rem)",fontWeight:400,marginBottom:4}}>
        {localQ ? `Results for "${localQ}"` : "All Reviewed Studios"}
      </h1>
      <p style={{fontSize:"0.85rem",color:"rgba(44,37,34,0.45)",fontWeight:300}}>{results.length} studio{results.length!==1?"s":""} found · sorted by rating</p>
    </div>

    {/* Results */}
    {results.length===0 ? (
      <div style={{textAlign:"center",padding:"80px 20px",color:"rgba(44,37,34,0.4)"}}>
        <div style={{fontSize:"2rem",marginBottom:12,opacity:0.3}}>⌕</div>
        <div style={{fontSize:"0.95rem",marginBottom:8}}>No studios match that search.</div>
        <div style={{fontSize:"0.82rem",fontWeight:300}}>Try "pilates in West Hollywood" or "megaformer near me"</div>
      </div>
    ) : (
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))",gap:20}}>
        {results.map(s => <StudioCard key={s.id} studio={s} navigate={navigate} />)}
      </div>
    )}
  </div>;
}

// ─── GALLERY CAROUSEL ────────────────────────────────────────
function GalleryCarousel({ gallery, studioName, studioColor }) {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  function scroll(dir) {
    if (!scrollRef.current) return;
    const cardWidth = 280 + 12;
    const newIdx = dir === "left" ? Math.max(0, activeIdx - 1) : Math.min(gallery.length - 1, activeIdx + 1);
    setActiveIdx(newIdx);
    scrollRef.current.scrollTo({ left: newIdx * cardWidth, behavior: "smooth" });
  }

  function handleScroll() {
    if (!scrollRef.current) return;
    const cardWidth = 280 + 12;
    const idx = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIdx(idx);
  }

  return (
    <div style={{marginBottom:28}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(44,37,34,0.35)",fontWeight:500}}>Photos</div>
        <div style={{display:"flex",gap:6}}>
          <button onClick={()=>scroll("left")} disabled={activeIdx===0} style={{width:32,height:32,borderRadius:"50%",border:"1px solid rgba(44,37,34,0.1)",background:activeIdx===0?"transparent":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:activeIdx===0?"default":"pointer",opacity:activeIdx===0?0.3:1,fontSize:"0.8rem",color:"#2C2522",transition:"all 0.2s",fontFamily:"inherit"}}>←</button>
          <button onClick={()=>scroll("right")} disabled={activeIdx>=gallery.length-1} style={{width:32,height:32,borderRadius:"50%",border:"1px solid rgba(44,37,34,0.1)",background:activeIdx>=gallery.length-1?"transparent":"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:activeIdx>=gallery.length-1?"default":"pointer",opacity:activeIdx>=gallery.length-1?0.3:1,fontSize:"0.8rem",color:"#2C2522",transition:"all 0.2s",fontFamily:"inherit"}}>→</button>
        </div>
      </div>
      {/* Scrollable track */}
      <div ref={scrollRef} onScroll={handleScroll} style={{display:"flex",gap:12,overflowX:"auto",scrollSnapType:"x mandatory",scrollbarWidth:"none",msOverflowStyle:"none",paddingBottom:4}}>
        <style>{`.gal-scroll::-webkit-scrollbar{display:none}`}</style>
        {gallery.map((img, i) => (
          <div key={i} style={{
            minWidth:280,height:200,borderRadius:16,background:img.color,flexShrink:0,scrollSnapAlign:"start",
            display:"flex",alignItems:"flex-end",justifyContent:"space-between",padding:"16px 18px",
            position:"relative",overflow:"hidden",transition:"transform 0.3s",
          }}>
            {/* Subtle pattern overlay */}
            <div style={{position:"absolute",inset:0,background:`radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)`,pointerEvents:"none"}} />
            {/* Studio initial watermark */}
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"4rem",fontFamily:"'Libre Baskerville',Georgia,serif",color:"rgba(255,255,255,0.12)",fontWeight:400,pointerEvents:"none"}}>
              {studioName.split(" ").map(w=>w[0]).slice(0,2).join("")}
            </div>
            <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.7)",fontWeight:400,position:"relative",zIndex:1}}>{img.label}</span>
            <span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)",position:"relative",zIndex:1}}>{i+1}/{gallery.length}</span>
          </div>
        ))}
      </div>
      {/* Dots indicator */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:12}}>
        {gallery.map((_, i) => (
          <div key={i} onClick={()=>{setActiveIdx(i);scrollRef.current?.scrollTo({left:i*(280+12),behavior:"smooth"});}} style={{
            width:activeIdx===i?20:6, height:6, borderRadius:3,
            background:activeIdx===i?studioColor:"rgba(44,37,34,0.12)",
            cursor:"pointer", transition:"all 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── STUDIO DETAIL PAGE ──────────────────────────────────────
function StudioPage({ studioId, navigate, communityReviews, addReview }) {
  const studio = STUDIOS.find(s=>s.id===studioId);
  if (!studio) return <div style={{padding:80,textAlign:"center"}}>Studio not found.</div>;
  const s = studio;
  const similar = STUDIOS.filter(x=>x.id!==s.id&&(x.neighborhood===s.neighborhood||x.classTypes.some(t=>s.classTypes.includes(t)))).slice(0,3);

  return <div style={{maxWidth:820,margin:"0 auto",padding:"28px clamp(16px,4vw,48px) 80px"}}>
    <span onClick={()=>navigate("search","")} style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.45)",cursor:"pointer",marginBottom:24,display:"inline-block"}}>← Back to studios</span>

    {/* Header */}
    <div style={{marginBottom:32}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,flexWrap:"wrap"}}>
        {/* Color dot */}
        <div style={{width:48,height:48,borderRadius:14,background:s.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"0.85rem",flexShrink:0}}>
          {s.name.split(" ").map(w=>w[0]).slice(0,2).join("")}
        </div>
        <div>
          <h1 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.6rem,4vw,2.2rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.15}}>{s.name}</h1>
          <div style={{fontSize:"0.84rem",color:"rgba(44,37,34,0.5)",marginTop:2}}>{s.neighborhood} · {s.address}</div>
        </div>
      </div>

      {/* Rating + tags row */}
      <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <StarRating rating={s.rating} count={s.reviewCount} size="lg" />
        {s.rating>=4.8 && <span style={{background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"4px 12px",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.04em"}}>✦ bookd pick</span>}
      </div>

      {/* Tags */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
        <span style={{background:"rgba(140,45,50,0.12)",borderRadius:100,padding:"6px 16px",fontSize:"0.8rem",color:"#8C2D32",fontWeight:500}}>{s.tags.level}</span>
        <span style={{background:"rgba(44,37,34,0.04)",borderRadius:100,padding:"6px 16px",fontSize:"0.8rem",color:"rgba(44,37,34,0.55)",display:"flex",alignItems:"center",gap:5}}>
          <span style={{fontSize:"0.7rem",opacity:0.45}}>P</span> {s.tags.parking}
        </span>
      </div>

      {/* Quick info bar */}
      <div style={{display:"flex",flexWrap:"wrap",gap:20,fontSize:"0.82rem",color:"rgba(44,37,34,0.55)",padding:"16px 20px",background:"#fff",borderRadius:14,border:"1px solid rgba(44,37,34,0.05)"}}>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>Classes:</span> {s.classTypes.join(", ")}</div>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>Price:</span> {s.priceRange}</div>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>IG:</span> {s.instagram}</div>
      </div>
    </div>

    {/* Best For callout */}
    <div style={{background:"rgba(140,45,50,0.06)",border:"1px solid rgba(140,45,50,0.15)",borderRadius:16,padding:"20px 24px",marginBottom:28}}>
      <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"#8C2D32",fontWeight:600,marginBottom:8}}>Best For</div>
      <div style={{fontSize:"0.92rem",lineHeight:1.6,color:"rgba(44,37,34,0.75)",fontWeight:300}}>{s.bestFor}</div>
    </div>

    {/* Photo Gallery */}
    {s.gallery && s.gallery.length > 0 && <GalleryCarousel gallery={s.gallery} studioName={s.name} studioColor={s.color} />}

    {/* Video placeholder */}
    <div style={{background:"rgba(44,37,34,0.04)",borderRadius:16,padding:"48px 20px",textAlign:"center",marginBottom:28,border:"1px solid rgba(44,37,34,0.06)"}}>
      <div style={{width:56,height:56,borderRadius:"50%",background:"rgba(44,37,34,0.08)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:"1.2rem",color:"rgba(44,37,34,0.3)"}}>▶</div>
      <div style={{fontSize:"0.9rem",fontWeight:500,marginBottom:4}}>Watch Our Review</div>
      <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.4)",fontWeight:300}}>See the space, the class, the vibe — our full video walkthrough</div>
    </div>

    {/* Good to Know */}
    {s.goodToKnow && s.goodToKnow.length > 0 && (
      <div style={{background:"#fff",borderRadius:16,padding:"22px 26px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:28}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
          <span style={{fontSize:"0.85rem",opacity:0.3}}>→</span>
          <h3 style={{fontSize:"0.92rem",fontWeight:600,letterSpacing:"-0.01em"}}>Good to Know</h3>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 240px), 1fr))",gap:0}}>
          {s.goodToKnow.map((tip, i) => (
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 0",borderBottom:i<s.goodToKnow.length-1?"1px solid rgba(44,37,34,0.04)":"none"}}>
              <span style={{color:"#8C2D32",fontSize:"0.7rem",marginTop:3,flexShrink:0}}>✦</span>
              <span style={{fontSize:"0.86rem",lineHeight:1.5,color:"rgba(44,37,34,0.65)",fontWeight:300}}>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Hero review */}
    <div style={{background:"#fff",borderRadius:16,padding:"28px 28px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:28}}>
      <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginBottom:14}}>Our Review</div>
      <div style={{fontSize:"1.05rem",lineHeight:1.8,color:"rgba(44,37,34,0.75)",fontStyle:"italic",fontWeight:300,marginBottom:16,fontFamily:"'Libre Baskerville',Georgia,serif"}}>
        "{s.heroReview}"
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:28,height:28,borderRadius:"50%",background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.55rem",color:"#FFF",fontWeight:700}}>b</div>
        <span style={{fontSize:"0.82rem",fontWeight:500}}>Sydney & Sam</span>
        <span style={{fontSize:"0.72rem",color:BRAND.textLight}}>bookd review</span>
      </div>
    </div>

    {/* Detailed sub-ratings */}
    <div style={{background:"#fff",borderRadius:16,padding:"24px 28px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:28}}>
      <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginBottom:4}}>Rating Breakdown</div>
      <div style={{fontSize:"0.72rem",color:"rgba(44,37,34,0.35)",marginBottom:16,fontWeight:300}}>Rated on <span onClick={()=>navigate("glossary")} style={{color:"#8C2D32",cursor:"pointer",fontWeight:500}}>the bookd scale</span></div>
      <SubRating label="Aesthetic" value={s.ratings.aesthetic} icon="◻" />
      <SubRating label="Music" value={s.ratings.music} icon="♫" />
      <SubRating label="Cleanliness" value={s.ratings.cleanliness} icon="✦" />
      <SubRating label="Difficulty" value={s.ratings.difficulty} icon="◇" />
      <SubRating label="Price" value={s.ratings.price} icon="$" />
      <SubRating label="Parking" value={s.ratings.parking} icon="P" />
    </div>

    {/* Detailed written review sections */}
    <div style={{display:"flex",flexDirection:"column",gap:20,marginBottom:32}}>
      {[
        { key: "space", title: "The Space", icon: "◻" },
        { key: "classExperience", title: "The Class", icon: "◎" },
        { key: "instructors", title: "The Instructors", icon: "◇" },
        { key: "vibe", title: "The Vibe", icon: "∿" },
        { key: "knowBeforeYouGo", title: "Know Before You Go", icon: "→" },
      ].map(sec => (
        <div key={sec.key} style={{background:"#fff",borderRadius:16,padding:"22px 26px",border:"1px solid rgba(44,37,34,0.05)"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
            <span style={{fontSize:"0.9rem",opacity:0.35}}>{sec.icon}</span>
            <h3 style={{fontSize:"0.92rem",fontWeight:600,letterSpacing:"-0.01em"}}>{sec.title}</h3>
          </div>
          <p style={{fontSize:"0.88rem",lineHeight:1.8,color:"rgba(44,37,34,0.65)",fontWeight:300}}>{s.sections[sec.key]}</p>
        </div>
      ))}
    </div>

    {/* ═══ COMMUNITY REVIEWS ═══ */}
    <CommunityReviewsSection studioId={s.id} studioName={s.name} classTypes={s.classTypes} reviews={communityReviews[s.id]||[]} addReview={addReview} />

    {/* Booking CTA */}
    <div style={{background:BRAND.red,borderRadius:16,padding:"28px 28px",color:"#FFF",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:40}}>
      <div>
        <div style={{fontSize:"1rem",fontWeight:500,marginBottom:4}}>Ready to try {s.name}?</div>
        <div style={{fontSize:"0.82rem",opacity:0.5,fontWeight:300}}>{s.priceRange} · {s.neighborhood}</div>
      </div>
      <div style={{display:"flex",gap:10}}>
        <button style={{background:"#FEEBAB",color:"#2C2522",border:"none",borderRadius:100,padding:"12px 28px",fontSize:"0.86rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Book a Class</button>
        <button style={{background:"transparent",color:"#FFF",border:"1px solid rgba(250,248,245,0.25)",borderRadius:100,padding:"12px 20px",fontSize:"0.86rem",cursor:"pointer",fontFamily:"inherit",fontWeight:400}}>Follow {s.instagram}</button>
      </div>
    </div>

    {/* Similar studios */}
    {similar.length > 0 && (
      <div>
        <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.4rem",fontWeight:400,marginBottom:6}}>Similar studios we've reviewed</h2>
        <p style={{fontSize:"0.85rem",color:"rgba(44,37,34,0.45)",marginBottom:24,fontWeight:300}}>More options nearby or with similar class types.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,280px),1fr))",gap:16}}>
          {similar.map(x => <StudioCard key={x.id} studio={x} navigate={navigate} />)}
        </div>
      </div>
    )}
  </div>;
}

// ─── COMMUNITY REVIEWS SECTION ───────────────────────────────
function CommunityReviewsSection({ studioId, studioName, classTypes, reviews, addReview }) {
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState("recent"); // "recent" | "highest" | "lowest"
  const [formData, setFormData] = useState({ name:"", rating:0, text:"", classType:"", instructor:"" });
  const [submitted, setSubmitted] = useState(false);
  const [hoverStar, setHoverStar] = useState(0);

  const sorted = useMemo(() => {
    const r = [...reviews];
    if (sortBy==="highest") r.sort((a,b)=>b.rating-a.rating);
    else if (sortBy==="lowest") r.sort((a,b)=>a.rating-b.rating);
    else r.sort((a,b)=>new Date(b.date)-new Date(a.date));
    return r;
  }, [reviews, sortBy]);

  const avgRating = reviews.length > 0 ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : null;

  function handleSubmit() {
    if (!formData.name||!formData.rating||!formData.text) return;
    addReview(studioId, {
      id: "cr"+Date.now(),
      name: formData.name,
      date: new Date().toISOString().slice(0,10),
      rating: formData.rating,
      text: formData.text,
      classType: formData.classType,
      instructor: formData.instructor,
    });
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name:"", rating:0, text:"", classType:"", instructor:"" });
    setTimeout(()=>setSubmitted(false), 4000);
  }

  const iS = {width:"100%",background:"rgba(44,37,34,0.02)",border:"1px solid rgba(44,37,34,0.1)",borderRadius:12,padding:"12px 16px",fontSize:"0.88rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxSizing:"border-box"};

  return (
    <div style={{marginBottom:32}}>
      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:12,marginBottom:20}}>
        <div>
          <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginBottom:6}}>Community Reviews</div>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.3rem",fontWeight:400}}>{reviews.length} review{reviews.length!==1?"s":""}</span>
            {avgRating && <div style={{display:"flex",alignItems:"center",gap:4}}>
              <span style={{color:"#8C2D32",fontSize:"0.8rem"}}>{"★".repeat(Math.round(parseFloat(avgRating)))}</span>
              <span style={{fontSize:"0.85rem",fontWeight:600}}>{avgRating}</span>
              <span style={{fontSize:"0.75rem",color:"rgba(44,37,34,0.4)"}}>community avg</span>
            </div>}
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {/* Sort */}
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)} style={{background:"rgba(44,37,34,0.04)",border:"1px solid rgba(44,37,34,0.08)",borderRadius:100,padding:"7px 30px 7px 12px",fontSize:"0.76rem",color:"#2C2522",outline:"none",fontFamily:"inherit",cursor:"pointer",appearance:"none",WebkitAppearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4L7 1' stroke='%232C2825' stroke-opacity='0.3' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 10px center"}}>
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
          <button onClick={()=>setShowForm(!showForm)} style={{background:showForm?"rgba(44,37,34,0.06)":"#2C2522",color:showForm?"#2C2522":"#FEEBAB",border:"none",borderRadius:100,padding:"8px 18px",fontSize:"0.8rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>
            {showForm ? "Cancel" : "+ Leave a Review"}
          </button>
        </div>
      </div>

      {/* Submitted toast */}
      {submitted && (
        <div style={{background:"rgba(138,159,112,0.1)",border:"1px solid rgba(138,159,112,0.25)",borderRadius:14,padding:"14px 20px",marginBottom:16,display:"flex",alignItems:"center",gap:10,fontSize:"0.86rem",color:"#6B8A55",animation:"fadeUp 0.3s ease"}}>
          <span>✓</span> Your review has been posted. Thanks for sharing your experience!
        </div>
      )}

      {/* Review form */}
      {showForm && (
        <div style={{background:"#fff",borderRadius:18,border:"1px solid rgba(44,37,34,0.06)",padding:"24px 26px",marginBottom:20,animation:"fadeUp 0.3s ease"}}>
          <div style={{fontSize:"0.95rem",fontWeight:600,marginBottom:4}}>Share your experience at {studioName}</div>
          <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.45)",marginBottom:20,fontWeight:300}}>Your review helps others find the right studio.</div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {/* Star rating selector */}
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Your Rating</div>
              <div style={{display:"flex",gap:4}}>
                {[1,2,3,4,5].map(star => (
                  <span key={star}
                    onMouseEnter={()=>setHoverStar(star)}
                    onMouseLeave={()=>setHoverStar(0)}
                    onClick={()=>setFormData({...formData,rating:star})}
                    style={{fontSize:"1.6rem",cursor:"pointer",color:(hoverStar||formData.rating)>=star?"#8C2D32":"rgba(44,37,34,0.12)",transition:"color 0.15s,transform 0.15s",transform:(hoverStar||formData.rating)>=star?"scale(1.1)":"scale(1)"}}>
                    ★
                  </span>
                ))}
                {formData.rating > 0 && <span style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.4)",alignSelf:"center",marginLeft:8}}>
                  {["","Not for me","It was okay","Solid studio","Really great","Obsessed"][formData.rating]}
                </span>}
              </div>
            </div>

            {/* Name */}
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Your Name</div>
              <input style={iS} placeholder="First name + last initial (e.g. Maya P.)" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} />
            </div>

            {/* Class type + Instructor row */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div>
                <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Class Type</div>
                <select value={formData.classType} onChange={e=>setFormData({...formData,classType:e.target.value})} style={{...iS,appearance:"none",WebkitAppearance:"none",cursor:"pointer",backgroundImage:`url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4L7 1' stroke='%232C2825' stroke-opacity='0.3' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 14px center",paddingRight:32}}>
                  <option value="">Select class</option>
                  {classTypes.map(t=><option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Instructor</div>
                <input style={iS} placeholder="Optional" value={formData.instructor} onChange={e=>setFormData({...formData,instructor:e.target.value})} />
              </div>
            </div>

            {/* Review text */}
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Your Review</div>
              <textarea style={{...iS,minHeight:100,resize:"vertical",borderRadius:12,lineHeight:1.6}} placeholder="What was the class like? Would you go back? Any tips for first-timers?" value={formData.text} onChange={e=>setFormData({...formData,text:e.target.value})} />
            </div>

            <button onClick={handleSubmit} disabled={!formData.name||!formData.rating||!formData.text} style={{
              background:(formData.name&&formData.rating&&formData.text)?"#2C2522":"rgba(44,37,34,0.1)",
              color:(formData.name&&formData.rating&&formData.text)?"#FEEBAB":"rgba(44,37,34,0.3)",
              border:"none",borderRadius:100,padding:"13px 0",fontSize:"0.88rem",fontWeight:500,cursor:(formData.name&&formData.rating&&formData.text)?"pointer":"default",
              fontFamily:"inherit",width:"100%",transition:"all 0.2s",
            }}>Post Review</button>
          </div>
        </div>
      )}

      {/* Review list */}
      {sorted.length === 0 ? (
        <div style={{background:"#fff",borderRadius:16,border:"1px solid rgba(44,37,34,0.05)",padding:"48px 20px",textAlign:"center"}}>
          <div style={{fontSize:"1.5rem",marginBottom:10,opacity:0.25}}>♡</div>
          <div style={{fontSize:"0.9rem",color:"rgba(44,37,34,0.45)",marginBottom:6}}>No community reviews yet.</div>
          <div style={{fontSize:"0.8rem",color:"rgba(44,37,34,0.3)",fontWeight:300}}>Be the first to share your experience!</div>
        </div>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {sorted.map((r, idx) => (
            <div key={r.id} style={{background:"#fff",borderRadius:16,border:"1px solid rgba(44,37,34,0.05)",padding:"20px 24px",animation:`fadeUp 0.3s ease ${idx*0.04}s both`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:6}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  {/* Avatar */}
                  <div style={{width:32,height:32,borderRadius:"50%",background:`hsl(${r.name.charCodeAt(0)*7},25%,72%)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.6rem",fontWeight:700,flexShrink:0}}>
                    {r.name.split(" ").map(w=>w[0]).join("")}
                  </div>
                  <div>
                    <div style={{fontSize:"0.88rem",fontWeight:500}}>{r.name}</div>
                    <div style={{display:"flex",alignItems:"center",gap:6,fontSize:"0.72rem",color:"rgba(44,37,34,0.4)",marginTop:1}}>
                      {r.classType && <span>{r.classType}</span>}
                      {r.classType && r.instructor && <span>·</span>}
                      {r.instructor && <span>w/ {r.instructor}</span>}
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{display:"flex",gap:0.5}}>
                    {[1,2,3,4,5].map(i=><span key={i} style={{fontSize:"0.65rem",color:i<=r.rating?"#8C2D32":"rgba(44,37,34,0.12)"}}>★</span>)}
                  </div>
                  <span style={{fontSize:"0.72rem",color:"rgba(44,37,34,0.35)"}}>{new Date(r.date+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
                </div>
              </div>
              <p style={{fontSize:"0.86rem",lineHeight:1.7,color:"rgba(44,37,34,0.65)",fontWeight:300}}>{r.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── GLOSSARY / HOW WE RATE ──────────────────────────────────
function GlossaryPage({ navigate }) {
  const categories = [
    {
      key: "aesthetic", icon: "◻", label: "Aesthetic", color: "#D4A59A",
      description: "How the studio looks and feels. We're rating the overall design, lighting, layout, decor, and whether the space feels intentional. Does it look like someone cared? Does the design match the brand? Would you want to take a photo here?",
      scale: [
        { stars: 5, text: "Stunning. Every detail is considered. The kind of space that elevates the entire experience." },
        { stars: 4, text: "Thoughtfully designed. Looks great, feels cohesive, a few small misses." },
        { stars: 3, text: "Fine. Clean and functional but nothing special. Generic studio vibes." },
        { stars: 2, text: "Needs work. Outdated, cluttered, or just doesn't feel like someone put thought into it." },
        { stars: 1, text: "Rough. You're here despite the space, not because of it." },
      ]
    },
    {
      key: "music", icon: "♫", label: "Music", color: "#C9A8D2",
      description: "The playlist matters more than people think. We're rating whether the music fits the class format, the volume level, the variety, and whether it makes you want to move harder or zone out deeper. A great playlist can make a mediocre class feel special.",
      scale: [
        { stars: 5, text: "DJ-level curation. You're Shazam-ing mid-plank. The music IS the experience." },
        { stars: 4, text: "Really solid. Good taste, good energy, fits the vibe." },
        { stars: 3, text: "Inoffensive. Background music that does the job but doesn't stand out." },
        { stars: 2, text: "Meh. Random playlist energy. Volume is off or the genre is a mismatch." },
        { stars: 1, text: "Distractingly bad. Makes you wish you brought your own headphones." },
      ]
    },
    {
      key: "cleanliness", icon: "✦", label: "Cleanliness", color: "#A8BFB2",
      description: "Non-negotiable. We're looking at the equipment, the floors, the bathrooms, the changing area, and whether the studio feels fresh when you walk in. Are the mats and reformers wiped down? Is the bathroom stocked? Does it smell like lavender or like the last class?",
      scale: [
        { stars: 5, text: "Spotless. Equipment pristine, bathrooms stocked, you could eat off the reformer (don't)." },
        { stars: 4, text: "Clean and well-maintained. Minor things but nothing that affects the experience." },
        { stars: 3, text: "Acceptable. Gets the job done but you notice a few things." },
        { stars: 2, text: "Needs attention. Equipment showing wear, bathrooms iffy." },
        { stars: 1, text: "Bring your own everything. You don't want to touch what they provide." },
      ]
    },
    {
      key: "difficulty", icon: "◇", label: "Difficulty", color: "#C4A88B",
      description: "How challenging the class actually is. This isn't a judgment — a 2 isn't bad and a 5 isn't better. It's a guide so you know what you're walking into. We rate based on the hardest class format they offer, and we'll note if they have beginner-friendly options.",
      scale: [
        { stars: 5, text: "Elite. You will be humbled. Previous fitness experience strongly recommended." },
        { stars: 4, text: "Challenging. You'll feel it for two days. Solid baseline fitness helpful." },
        { stars: 3, text: "Moderate. A good workout for most people. Accessible with effort." },
        { stars: 2, text: "Approachable. Great for beginners or low-impact days. You'll work but won't suffer." },
        { stars: 1, text: "Gentle. Restorative, meditative, stretch-focused. The goal isn't intensity." },
      ]
    },
    {
      key: "price", icon: "$", label: "Price", color: "#B8C4A0",
      description: "Value relative to what you get. We're not just rating how cheap it is — we're rating whether the experience justifies the cost. A $60 class that delivers a private-session-level experience can score higher than a $25 class that feels like a YouTube video in a room.",
      scale: [
        { stars: 5, text: "Incredible value. You're getting way more than you're paying for." },
        { stars: 4, text: "Good value. Fair pricing for the quality. You don't feel ripped off." },
        { stars: 3, text: "Standard LA pricing. It's what you'd expect — not a deal, not a scam." },
        { stars: 2, text: "Pricey. The experience is good but you feel the cost." },
        { stars: 1, text: "Ouch. Hard to justify unless money is truly no object." },
      ]
    },
    {
      key: "parking", icon: "P", label: "Parking", color: "#9BB5C4",
      description: "It's LA. Parking can make or break the experience. We're rating how easy it is to park, whether there's a lot or structure, how far you have to walk, and whether you'll spend 15 minutes circling the block. We also note if biking, walking, or transit is a better option.",
      scale: [
        { stars: 5, text: "Free lot or structure right there. Park and walk in. No stress." },
        { stars: 4, text: "Dedicated parking or easy street parking. Might take a minute but no drama." },
        { stars: 3, text: "Manageable. Metered or residential nearby. Give yourself an extra 5 minutes." },
        { stars: 2, text: "Annoying. Limited, competitive, or expensive. Plan ahead." },
        { stars: 1, text: "Nightmare. You'll be late to class because you're circling the block. Consider biking." },
      ]
    },
  ];

  return (
    <div style={{maxWidth:760,margin:"0 auto",padding:"32px clamp(16px,4vw,48px) 80px"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(2rem,5vw,2.8rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:14}}>
          How we rate
        </div>
        <p style={{fontSize:"0.95rem",color:"rgba(44,37,34,0.55)",lineHeight:1.7,maxWidth:520,margin:"0 auto",fontWeight:300}}>
          Every studio on bookd is reviewed in person by our team. We take the class, use the locker room, fight for parking, and tell you exactly what we found. No sponsored reviews. No paid placements. Just honest takes.
        </p>
      </div>

      {/* Overall score explanation */}
      <div style={{background:"#fff",borderRadius:18,padding:"28px 30px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
          <div style={{width:36,height:36,borderRadius:10,background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",fontSize:"0.7rem",fontWeight:700}}>B</div>
          <div>
            <div style={{fontWeight:600,fontSize:"0.95rem"}}>The bookd score</div>
            <div style={{fontSize:"0.76rem",color:"rgba(44,37,34,0.45)"}}>Our overall rating out of 5</div>
          </div>
        </div>
        <p style={{fontSize:"0.88rem",lineHeight:1.75,color:"rgba(44,37,34,0.65)",fontWeight:300}}>
          The overall bookd score is our holistic take on the studio — not a simple average of the six categories below. It's how we'd answer the question "should I go here?" It factors in the vibe, the instructors, the experience as a whole, and whether we'd genuinely go back. A studio can score lower in individual categories but still earn a high overall score if the total experience is exceptional.
        </p>
      </div>

      {/* The six categories */}
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {categories.map((cat, idx) => (
          <div key={cat.key} style={{background:"#fff",borderRadius:18,border:"1px solid rgba(44,37,34,0.05)",overflow:"hidden",animation:`fadeUp 0.4s ease ${idx*0.06}s both`}}>
            {/* Category header */}
            <div style={{padding:"24px 28px 0"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                <div style={{width:36,height:36,borderRadius:10,background:cat.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.85rem",fontWeight:600}}>{cat.icon}</div>
                <div style={{fontSize:"1.05rem",fontWeight:600,letterSpacing:"-0.01em"}}>{cat.label}</div>
              </div>
              <p style={{fontSize:"0.88rem",lineHeight:1.75,color:"rgba(44,37,34,0.6)",fontWeight:300,marginBottom:20}}>
                {cat.description}
              </p>
            </div>
            {/* Scale breakdown */}
            <div style={{background:"rgba(44,37,34,0.015)",borderTop:"1px solid rgba(44,37,34,0.04)",padding:"16px 28px 20px"}}>
              {cat.scale.map((level, i) => (
                <div key={i} style={{display:"flex",gap:14,padding:"10px 0",borderBottom:i<cat.scale.length-1?"1px solid rgba(44,37,34,0.04)":"none",alignItems:"flex-start"}}>
                  <div style={{display:"flex",gap:1,color:"#8C2D32",fontSize:"0.6rem",flexShrink:0,marginTop:2,minWidth:48}}>
                    {"★".repeat(level.stars)}{"☆".repeat(5-level.stars)}
                  </div>
                  <div style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.6)",lineHeight:1.5,fontWeight:300}}>{level.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div style={{textAlign:"center",marginTop:40,padding:"32px 20px",background:"rgba(44,37,34,0.02)",borderRadius:16}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.2rem",fontWeight:400,marginBottom:8}}>That's the system.</div>
        <p style={{fontSize:"0.85rem",color:BRAND.textMid,maxWidth:440,margin:"0 auto 20px",fontWeight:300,lineHeight:1.6}}>
          We pay for our own classes, drive our own cars to find parking, and write our own reviews. No studio can pay to change their score. What you see is what we actually think. — Sydney & Sam
        </p>
        <button onClick={()=>navigate("home")} style={{background:BRAND.red,color:"#FFF",border:"none",borderRadius:100,padding:"12px 28px",fontSize:"0.86rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Find a Studio</button>
      </div>
    </div>
  );
}

// ─── ABOUT / OUR STORY ──────────────────────────────────────
function AboutPage({ navigate, searchAndGo }) {
  return (
    <div style={{maxWidth:680,margin:"0 auto",padding:"40px clamp(16px,4vw,48px) 80px"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.8rem,5vw,2.6rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.15}}>
          the story behind bookd
        </div>
      </div>

      {/* So that's what bookd is */}
      <div style={{background:"#fff",borderRadius:20,padding:"clamp(28px,5vw,44px)",border:"1px solid rgba(44,37,34,0.05)",marginBottom:40}}>
        <div style={{background:BRAND.butterLight,borderRadius:16,padding:"28px 28px",textAlign:"center"}}>
          <p style={{fontSize:"0.92rem",lineHeight:1.8,color:"rgba(44,37,34,0.65)",fontWeight:300,maxWidth:520,margin:"0 auto"}}>
            It's a love letter to boutique fitness. It's a studio guide written by two people who are actually in the classes, actually forming the opinions, actually coming back (or not). It's a place where we talk about the vibe and the instructor and the playlist and whether the parking situation is acceptable. It's honest. It's specific. And it's written the way we'd tell a friend, because that's exactly what it is.
          </p>
        </div>
      </div>

      {/* Sydney & Sam cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 260px), 1fr))",gap:16,marginBottom:40}}>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 24px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"1.1rem",fontWeight:600,margin:"0 auto 14px"}}>S</div>
          <div style={{fontWeight:600,fontSize:"1rem",marginBottom:2}}>Sydney</div>
          <div style={{fontSize:"0.78rem",color:BRAND.textLight,marginBottom:10}}>Co-Founder, bookd with us</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>A digital marketing expert by trade with a deep obsession with Pilates and boutique fitness that turned into very strong opinions. Sydney built bookd to give those opinions a home — and to make finding the right studio as easy as asking a friend who's been to all of them.</p>
          <div style={{marginTop:12,fontSize:"0.78rem",color:BRAND.red,fontWeight:500}}>@bookdwithus</div>
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 24px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:BRAND.butter,display:"flex",alignItems:"center",justifyContent:"center",color:BRAND.red,fontSize:"1.1rem",fontWeight:600,margin:"0 auto 14px"}}>S</div>
          <div style={{fontWeight:600,fontSize:"1rem",marginBottom:2}}>Sam</div>
          <div style={{fontSize:"0.78rem",color:BRAND.textLight,marginBottom:10}}>Co-Founder, bookd with us</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>Founder of Hype Girl Club and Mason Market(ing), Sam has spent years curating wellness events and building community for women across LA. She brought the event expertise, the network, and the conviction that honest reviews could actually help people find their studio.</p>
          <div style={{marginTop:12,fontSize:"0.78rem",color:BRAND.red,fontWeight:500}}>@bookdwithus</div>
        </div>
      </div>

      {/* Substack */}
      <div style={{background:"#fff",borderRadius:16,padding:"24px 28px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:40,textAlign:"center"}}>
        <div style={{fontSize:"0.95rem",fontWeight:500,marginBottom:6}}>Want to read more?</div>
        <p style={{fontSize:"0.82rem",color:BRAND.textMid,lineHeight:1.6,fontWeight:300,maxWidth:400,margin:"0 auto 16px"}}>We write about studio culture, the classes we're loving, and the honest opinions that don't fit in a rating. Follow along on Substack.</p>
        <a href="https://bookdwithus.substack.com" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:BRAND.butterLight,color:BRAND.red,border:`1px solid ${BRAND.butter}`,borderRadius:100,padding:"10px 24px",fontSize:"0.84rem",fontWeight:600,textDecoration:"none",cursor:"pointer"}}>Read our Substack →</a>
      </div>

      {/* CTA */}
      <div style={{background:BRAND.red,borderRadius:20,padding:"36px 28px",textAlign:"center",color:"#fff"}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.4rem",fontWeight:400,marginBottom:8}}>ready to find your studio?</div>
        <p style={{fontSize:"0.85rem",opacity:0.7,maxWidth:360,margin:"0 auto 20px",fontWeight:300,lineHeight:1.6}}>We've reviewed every studio we've been to. Search by class type, neighborhood, or just tell us what you're in the mood for.</p>
        <button onClick={()=>searchAndGo("")} style={{background:"#fff",color:BRAND.red,border:"none",borderRadius:100,padding:"12px 32px",fontSize:"0.88rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Explore Studios</button>
      </div>
    </div>
  );
}
