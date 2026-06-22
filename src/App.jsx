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
    id: "s1", name: "Speir Pilates", neighborhood: "West Hollywood", address: "8356 Santa Monica Blvd, West Hollywood, CA",
    zip: "90069", classTypes: ["Reformer", "Power Reformer"],
    dropInPrice: "$45", priceTier: "$$", introOffer: "Single class for $30",
    bookingUrl: "https://speirpilates.com/studio-classes", instagram: "@speirpilates",
    tags: { level: "All Levels" }, parkingType: "Metered Parking", parkingEase: "Moderate",
    goodToKnow: ["Everyone is so nice - front desk, instructors, great sense of community", "Music is always good - solid volume, great playlists"],
    bestFor: "Anyone who wants a challenging but not brutal reformer class with genuinely great energy and instructors who actually care.",
    rating: 4.3, ratings: { aesthetic: 3.5, music: 4.5, cleanliness: 5, difficulty: 4 },
    reviewCount: 0,
    gallery: [],
    heroReview: "This is one of my favorite studios in LA. You leave feeling refreshed - you got a good workout but you didn't kill yourself. The people there are what make it. The girls at the front desk, the instructors, everyone is just so nice. It's a vibe.",
    sections: {
      space: "Clean, minimal studio with a nice plant wall that gives it a fresh, oxygenated feel. Nothing flashy or Instagram-bait, but well-maintained and the equipment is in great shape. It's a studio that puts the work first.",
      classExperience: "We took the Power Reformer and it was the right amount of challenging - a four on our difficulty scale. You get a really great workout but also a really nice stretch at the end. You leave feeling worked but not destroyed.",
      vibe: "The standout here is genuinely the people. The girls at the front desk, the instructors - everyone is just so nice. There's a real sense of community that you feel the second you walk in. It's warm without trying too hard.",
      knowBeforeYouGo: "Single class is $45 which is on the higher end, but they do offer a new client special for $30. The music is always good - solid volume, good playlists. It's a vibe in there."
    },
    videoId: null, color: "#C4A08A",
  },
  {
    id: "s2", name: "Pilates Boutique", neighborhood: "West Hollywood", address: "470 N Doheny Dr, West Hollywood, CA",
    zip: "90048", classTypes: ["Cadillac Reformer", "Chair"],
    dropInPrice: "$59", priceTier: "$$$", introOffer: "Single class for $39",
    bookingUrl: "https://www.pilatesboutique.com/", instagram: "@studiopilatesboutique",
    tags: { level: "All Levels" }, parkingType: "Street Parking", parkingEase: "Moderate",
    goodToKnow: ["Cadillac reformers - unique moves you won't get at a classic reformer studio", "Difficulty varies a lot depending on your instructor", "Music is on the quieter side - more background than playlist"],
    bestFor: "Anyone curious about Cadillac reformers and looking for a good stretch with unique moves you won't find at a standard reformer studio.",
    rating: 3.4, ratings: { aesthetic: 3.5, music: 2.5, cleanliness: 5, difficulty: 2.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "The Cadillac reformers are genuinely stunning and you'll do moves here you won't do anywhere else. But the studio itself is pretty bare bones, the music is quiet, and the difficulty really depends on your instructor. It's a nice stretch but don't expect to be challenged.",
    sections: {
      space: "Pretty bare bones studio - they really just have the Cadillac reformers, chairs, mirrors, and maybe a little set of dumbbells. The equipment itself is really stunning though. Clean and functional, but nothing about the space specifically stands out.",
      classExperience: "Because it's a Cadillac reformer, you do some pretty unique moves that you might not do at a classic reformer studio. It's a really nice stretch. Difficulty is a 2.5 - it depends a lot on the instructor you get.",
      vibe: "Quiet and understated. The music is fairly low and doesn't always seem like there's an intentional playlist - more background noise. It's a calm space but it doesn't have that energy you get at some other studios.",
      knowBeforeYouGo: "This is one of the most expensive studios we've been to - drop-in rate is $59. They do have an intro offer for $39. Expect a stretch-focused class rather than an intense workout."
    },
    videoId: null, color: "#B8A090",
  },
  {
    id: "s3", name: "Silver Springs", neighborhood: "West Hollywood", address: "8710 Melrose Ave, West Hollywood, CA",
    zip: "90069", classTypes: ["Heated HIIT Pilates", "Hot Yoga", "Sculpt"],
    dropInPrice: "$35", priceTier: "$$", introOffer: "2 classes for $40",
    bookingUrl: "https://silverspringsla.com/pages/schedule", instagram: "@silverspringsmelrose",
    tags: { level: "All Levels" }, parkingType: "Parking Lot", parkingEase: "Moderate",
    isFavorite: true, favoriteNote: "The sound system alone changed how I feel about studio music. And they have a parking lot. In LA.",
    goodToKnow: ["They give you a mat, towel, and face towel - all free", "They have their own parking lot which never happens in LA", "They clean everything up for you after class", "Palo Santo at the end of class - so calming"],
    bestFor: "Anyone who wants a studio that goes above and beyond on the details. The sound system, the amenities, the parking lot - everything is thought through.",
    rating: 4.9, ratings: { aesthetic: 5, music: 5, cleanliness: 5, difficulty: 4.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "The sound system is incredible - speakers mounted on the wall, mic is super crisp and clear. This is the first time I've been motivated by the music in a class in a really long time. It was almost like a spiritual experience. And they have their own parking lot. In LA. I'm sold.",
    sections: {
      space: "Everything about this studio feels intentional. The sound system alone sets it apart - speakers mounted on the wall, crystal clear audio. The aesthetic is on point and the space is spotless. They even have their own parking lot, which in LA is basically a miracle.",
      classExperience: "We took the heated HIIT Pilates and it was a 4.5 on difficulty. Challenging and sweat-inducing but the music makes you want to push harder. The combination of heat and high-intensity reformer work is addictive.",
      vibe: "This was almost a spiritual experience. The music, the heat, the energy in the room - it all comes together. And the little touches matter: they give you a mat, towel, and face towel all for free. They clean everything up for you. They bring in Palo Santo at the end. It's the details.",
      knowBeforeYouGo: "Drop-in is $35 which is very fair for what you get. They have a great intro deal - 2 classes for $40. They provide mat, towel, and face towel. They have a parking lot. Honestly the perks here are unmatched."
    },
    videoId: null, color: "#A0B8B8",
  },
  {
    id: "s4", name: "Karen Lord Pilates", neighborhood: "Santa Monica", address: "1427 7th St, Santa Monica, CA",
    zip: "90401", classTypes: ["Modern Reformer"],
    dropInPrice: "$43", priceTier: "$$", introOffer: "Single class for $25",
    bookingUrl: "https://www.karenlordpilatesmovement.com/book-a-class", instagram: "@karenlordpilates",
    tags: { level: "Beginner-Friendly" }, parkingType: "Street Parking", parkingEase: "Easy",
    brand: "Karen Lord Pilates",
    goodToKnow: ["The bathroom is stunning - beautiful stone sink, incredible details and decor", "They have really cute merch", "Class leans beginner - not the most challenging if you're experienced", "Free 2-hour parking on 7th St right in front of the studio"],
    bestFor: "Beginners or anyone who wants a beautiful, crystal-filled studio with a calming energy - just don't expect to be pushed hard.",
    rating: 3.7, ratings: { aesthetic: 5, music: 2.5, cleanliness: 5, difficulty: 2.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "The aesthetic is a five, easy. The lights, the huge crystals, the attention to detail - it's white, bright, and beautiful. But the class itself was not very challenging and the music was too quiet. It's gorgeous in there but the workout didn't match the space.",
    sections: {
      space: "Five for aesthetic, no question. Beautiful lighting, huge crystals throughout, really thoughtful details everywhere. White and bright with a calming energy. The bathroom alone is worth mentioning - stunning stone sink with incredible decor. They also have really cute branded merch.",
      classExperience: "We took the Modern Reformer which was listed for beginners and intermediate. Personally, it didn't feel very challenging - I'd give it a 2.5 on difficulty. The moves were nice but if you're looking for intensity, this isn't it.",
      vibe: "Calm, beautiful, serene. The space does all the talking. It feels luxurious and intentional. But the energy could use a boost - the music was really quiet and it could have been more of a vibe if they just turned up the volume.",
      knowBeforeYouGo: "Drop-in is $43 which is pretty high for LA, especially given the difficulty level. They do have a new client special for $25 which is a great deal to try it out. Free 2-hour parking on 7th St right in front of the studio."
    },
    videoId: null, color: "#D4B8A0",
  },
  {
    id: "s5", name: "The Pilates Cave", neighborhood: "West LA", address: "11824 W Pico Blvd, Los Angeles, CA",
    zip: "90064", classTypes: ["Reformer", "Mat"],
    dropInPrice: "$45", priceTier: "$$", introOffer: "First class $35",
    bookingUrl: "https://thepilatescave.com/schedule-pilates-cave/", instagram: "@thepilatescave",
    tags: { level: "Beginner-Friendly" }, parkingType: "Metered Parking", parkingEase: "Moderate",
    brand: "The Pilates Cave",
    goodToKnow: ["They have a sauna in the studio", "Multiple locations - reformer and mat are separate", "Class leans beginner - great energy but not intense"],
    bestFor: "Anyone who wants a beautiful studio with great energy, a sauna, and a class that feels good on your body without pushing you to the limit.",
    rating: 4, ratings: { aesthetic: 5, music: 4, cleanliness: 5, difficulty: 2 },
    reviewCount: 0,
    gallery: [],
    heroReview: "I instantly gained ten points of serotonin as I entered. The energy and aesthetic are incredible but I have to be honest - the class leaned beginner and the intensity was minimal. I'll definitely be back to try the mat studio though. And they have a sauna. A sauna!",
    sections: {
      space: "The second you walk in you feel it - the energy, the aesthetic, everything. It's one of those studios where the space itself elevates the experience. They have multiple locations with separate reformer and mat studios. And yes, they have a sauna.",
      classExperience: "Class felt good for the body but leaned beginner. If you're looking for a challenge, this probably isn't your spot. But if you want something that feels restorative and leaves you feeling good without destroying you, it delivers.",
      vibe: "Incredible energy. The kind of studio where you walk in and immediately feel better. The aesthetic carries a lot of the experience. Loved it - but the workout intensity was minimal.",
      knowBeforeYouGo: "Price is on the higher end but they have great intro offers - definitely take advantage. They have multiple locations so make sure you're going to the right one. And don't skip the sauna."
    },
    videoId: null, color: "#B0C0A8",
  },
  {
    id: "s6", name: "Oblix Studio", neighborhood: "Beverly Hills", address: "243 N Robertson Blvd, Beverly Hills, CA",
    zip: "90211", classTypes: ["Lagree", "Megaformer"],
    dropInPrice: "$42", priceTier: "$$", introOffer: "Buy one, get one for $42",
    bookingUrl: "https://www.oblixstudio.com/schedule", instagram: "@oblixstudio",
    tags: { level: "Intermediate" }, parkingType: "Metered Parking", parkingEase: "Easy",
    goodToKnow: ["Incredible intro offers - check their site", "Music is loud and fun - mostly hip hop and rap", "Be ready to be humbled - this class is no joke"],
    bestFor: "Anyone who wants a seriously challenging Lagree class in a beautiful studio with great music. Come humble.",
    rating: 4.5, ratings: { aesthetic: 4.5, music: 4, cleanliness: 5, difficulty: 4.7 },
    reviewCount: 0,
    gallery: [],
    heroReview: "This was humbling. A 4.7 on difficulty - one of the most challenging classes I've taken. The megaformers are beautiful, the backlighting is amazing, and the music is loud and fun. They have some really incredible intro offers if you want to try it.",
    sections: {
      space: "Beautiful studio with amazing backlighting. The megaformers themselves are stunning. It's a space that looks as good as the workout feels - which is saying something because this workout will humble you.",
      classExperience: "4.7 on difficulty. This is not a gentle Lagree class. You will shake. Every class has been heavy on the hip hop and rap which adds to the energy. If you're looking to be challenged, this is your studio.",
      vibe: "High energy, loud music, serious workout. The kind of studio where you walk out feeling like you accomplished something. Not pretentious - just intense.",
      knowBeforeYouGo: "Single class is $42. They have some really incredible intro offers - definitely check their site. Be prepared to be humbled, especially if it's your first Lagree class."
    },
    videoId: null, color: "#C0A8C0",
  },
  {
    id: "s7", name: "Be Kind Studios", neighborhood: "Malibu", address: "23465 Civic Center Way, Suite #830, Malibu, CA",
    zip: "90265", classTypes: ["Reformer"],
    dropInPrice: "$45", priceTier: "$$", introOffer: "Single class for $35",
    bookingUrl: "https://bekindstudios.com/locations#/", instagram: "@bekindstudios",
    tags: { level: "Intermediate" }, parkingType: "Parking Lot", parkingEase: "Easy",
    isFavorite: true, favoriteNote: "Worth the drive to Malibu. The coffee and matcha machine alone is worth mentioning.",
    goodToKnow: ["They have an infamous coffee and matcha machine - actually so good", "One of their newest locations - attention to detail in the design is insane", "Every class is going to be challenging", "Instructors are super nice and knowledgeable"],
    bestFor: "Anyone willing to make the drive to Malibu for a stunning studio with consistently challenging classes, amazing instructors, and honestly the best studio coffee machine in LA.",
    rating: 4.7, ratings: { aesthetic: 5, music: 4.5, cleanliness: 5, difficulty: 4.3 },
    reviewCount: 0,
    gallery: [],
    heroReview: "We were SO obsessed. The attention to detail in the design of this studio is next level and the vibes are 10 out of 10. Every class is going to be challenging and the instructors are so nice and knowledgeable. And you have to try the coffee and matcha machine. It's actually so good.",
    sections: {
      space: "Absolutely stunning. This is one of their newest locations and you can tell - the attention to detail in the design is insane. Everything feels intentional and elevated. It's the kind of studio you want to take a photo in.",
      classExperience: "Every class here is going to challenge you - 4.3 on difficulty. The instructors are knowledgeable and genuinely nice, which makes the hard parts feel supported rather than punishing.",
      vibe: "10 out of 10. The energy, the design, the instructors, the little touches like the coffee and matcha machine - everything comes together. If you're in Malibu, this is a must-try.",
      knowBeforeYouGo: "Single class is $45. The drive to Malibu is the only barrier - once you're there, everything is worth it. Try the coffee and matcha machine, seriously."
    },
    videoId: null, color: "#A8C0D0",
  },
  {
    id: "s8", name: "Sculpt Club", neighborhood: "Studio City", address: "12348 Ventura Blvd, Suite C, Studio City, CA",
    zip: "91604", classTypes: ["Booty & Abs", "Full Body Sculpt", "Pilates", "Mat & Tower Pilates"],
    dropInPrice: "$38", priceTier: "$$", introOffer: "3 classes for $70",
    bookingUrl: "https://www.sculptclubco.com/schedule", instagram: "@sculptclubla",
    tags: { level: "Beginner-Friendly" }, parkingType: "Street Parking", parkingEase: "Moderate",
    goodToKnow: ["Branded merch, free samples, coffee, and chlorophyll drops for your water", "The space feels like somewhere you'd want to hang out before or after class", "Super beginner friendly - great for first-timers"],
    bestFor: "Beginners or anyone who wants a bright, welcoming studio with a great hang-out-before-and-after energy. Don't expect to be destroyed but expect a solid burn.",
    rating: 4, ratings: { aesthetic: 5, music: 3, cleanliness: 5, difficulty: 3 },
    reviewCount: 0,
    gallery: [],
    heroReview: "The studio is stunning - bright, airy, and has such a clean, welcoming energy. We took the Booty and Abs class which was all about slow, controlled movements. I would have loved a bit more intensity but it was still a great burn and super beginner friendly. And they have chlorophyll drops for your water in the back. We love a detail.",
    sections: {
      space: "Bright, airy, and stunning. It's got such a clean, welcoming energy. The studio feels like a space you'd want to hang out in before or after class. They have branded merch, free samples, coffee, and even chlorophyll drops for your water. The details matter and they know it.",
      classExperience: "We took the Booty and Abs class - all about slow, controlled movements and really engaging those smaller stabilizing muscles in your core and glutes. Personally, I would have loved a bit more intensity, but it was still a great burn and super beginner friendly.",
      vibe: "Welcoming and approachable. This isn't a studio that's trying to intimidate you. It's the kind of place you'd bring a friend who's never done Pilates. The energy is warm and the extras (merch, coffee, chlorophyll drops) make it feel like a little community.",
      knowBeforeYouGo: "$35 for a single class which is moderate for LA. Super beginner friendly so if you're experienced and want intensity, maybe try their Full Body Sculpt instead of Booty and Abs."
    },
    videoId: null, color: "#D0C0A0",
  },
  {
    id: "s9", name: "The Heated Room", neighborhood: "Santa Monica", address: "315 Wilshire Blvd, Santa Monica, CA",
    zip: "90401", classTypes: ["Power Pilates", "Semi-Private Reformer"],
    dropInPrice: "$40-$55", priceTier: "$$-$$$", introOffer: "Mat: 2 classes for $40, Reformer: Single class for $45",
    bookingUrl: "https://www.heatedroom.com/schedule?_mt=%2Fschedule%2Fdaily%3FactiveCategoryId%3D0", instagram: "@heatedroom",
    tags: { level: "Intermediate" }, parkingType: "Metered Parking", parkingEase: "Moderate",
    isFavorite: true, favoriteNote: "A luxurious cave with the best playlist in LA. You'll feel this one for days.",
    goodToKnow: ["From the outside you'd never guess how stunning it is inside", "Feels like a luxurious cave - the lighting is next level", "Music is LOUD - bring your energy", "Mats, towels, and face towels all provided"],
    bestFor: "Anyone who wants fast-paced, form-focused Pilates with an incredible playlist in a space that feels like a luxurious hidden cave.",
    rating: 4.9, ratings: { aesthetic: 5, music: 5, cleanliness: 5, difficulty: 4.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "From the outside you'd never guess how truly stunning this place is. It feels like you've been transported into a luxurious cave. The lighting, the setup, the amenities - everything is next level. And the music is so loud your core is literally shaking. If you like fast-paced, form-focused Pilates with an incredible playlist, you need this studio in your life.",
    sections: {
      space: "From the outside you'd never guess it. But inside? It feels like you've been transported into a luxurious cave. The lighting is next level, the setup is incredible, and the amenities are thoughtful. It's one of those spaces that makes you feel like you're somewhere special.",
      classExperience: "Power Pilates combines classical core work with high-intensity movement and added resistance. You're building strength and endurance at the same time. It's fast-paced and form-focused - and with the music that loud, your core is literally shaking.",
      vibe: "Intense, immersive, and elevated. The music is loud, the energy is high, and the space makes you feel like you're in on a secret. This is not a gentle Pilates class. It's an experience.",
      knowBeforeYouGo: "Price is on the higher end - check their site for current rates and intro offers. They also offer semi-private reformer sessions. Mats, towels, and face towels are all provided. Come ready to work."
    },
    videoId: null, color: "#B8C4B8",
  },
  {
    id: "s10", name: "Coco House Pilates", neighborhood: "Beverly Hills", address: "350 N Canon Dr, Beverly Hills, CA",
    zip: "90210", classTypes: ["Heated Mat Pilates", "Reformer", "Tower"],
    dropInPrice: "$45-$65", priceTier: "$$$", introOffer: "Mat: Single class for $25, Reformer: Single class for $30\"",
    bookingUrl: "https://www.cocohousepilates.com/book-a-class", instagram: "@cocohousepilates",
    tags: { level: "All Levels" }, parkingType: "Metered Parking, Parking Garage free for 2 hours", parkingEase: "Easy",
    goodToKnow: ["Heated class - come hydrated", "Dark, moody mat pilates room - very different from typical studio", "Grip socks mandatory for both rooms", "Plenty of free parking around the studio"],
    bestFor: "Intermediate to advanced studio goers who want to be pushed. The combinations are unmatched and you will leave feeling like it is the hardest pilates class you have ever taken.",
    rating: 4.8, ratings: { aesthetic: 5, music: 4.5, cleanliness: 5, difficulty: 4.7 },
    reviewCount: 0,
    gallery: [],
    heroReview: "The newest Pilates studio in Beverly Hills. We took their Carve class which is heated mat Pilates inside this super vibey, dark, moody room that feels so different from your typical studio. We used everything - circles, hand weights, blocks. It's a full experience.",
    sections: {
      space: "Super vibey, dark, moody room that feels completely different from your typical bright-and-white Pilates studio. It's heated, which adds another layer to the experience. The newest studio in Beverly Hills and it shows - everything feels fresh and intentional.",
      classExperience: "The Carb class is heated mat Pilates and they use everything - circles, hand weights, blocks. It's a full-body, full-equipment class. Expect to sweat.",
      vibe: "This studio feels intentional in a way most studios don't. It's not just a pretty space with nice lighting - every detail is engineered. The infrared heat, the red light therapy in the ceilings, the humidity-controlled climate system - it's all designed to make your body perform better, not just sweat more. It's cozy but elevated. Welcoming but serious. The kind of studio where you walk in and immediately think 'ok, they thought about this.' And the little touches seal it - alkaline filtered water from marble sinks, a eucalyptus steam reset at the end of class from a sauna heater built into a Himalayan salt wall. It's giving wellness experience, not just workout.",
      knowBeforeYouGo: "The heated room uses infrared panels, not traditional heat, so it warms your body from within rather than just blasting hot air - it's a different kind of sweat. Come hydrated. They have alkaline filtered water stations built into these gorgeous marble sinks under the logo. And don't rush out after class - they activate a eucalyptus steam from the Himalayan salt wall at the end that is genuinely grounding."
    },
    videoId: null, color: "#C8B0A0",
  },
  {
    id: "s11", name: "Briiomare", neighborhood: "Beverly Hills", address: "236 1/2 S Robertson Blvd, Beverly Hills, CA",
    zip: "90211", classTypes: ["Heated Mat Pilates", "Non-Heated Mat Pilates"],
    dropInPrice: "$35", priceTier: "$$", introOffer: "2 classes for $35",
    bookingUrl: "https://www.briiomare.com/book-a-class", instagram: "@briiomare",
    tags: { level: "All Levels" }, parkingType: "Metered Parking", parkingEase: "Easy",
    goodToKnow: ["Tucked away off the street in a standalone house-style building", "Smells incredible when you walk in", "Started as a Pilates sock brand before opening the studio", "No reformers - heated and non-heated mat classes only"],
    bestFor: "Anyone who appreciates thoughtful design and wants a cozy, French-inspired mat Pilates experience in a space that feels like a hidden gem off Robertson.",
    rating: 4.5, ratings: { aesthetic: 4.5, music: 5, cleanliness: 5, difficulty: 3.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "This French-inspired, cozy new studio is tucked away in a standalone building off Robertson and the attention to detail is unreal. Exposed brick, embossed logo on the Pilates ball and ring, even the pricing card was beautifully designed. We took Ashley's class and she used the Pilates ball in such a fun and challenging way. Even though it was non-heated, we were working up a sweat.",
    sections: {
      space: "Tucked away off the street in a house-style standalone building that you could easily walk past if you didn't know it was there. The French-inspired design is so well done - exposed brick, embossed branding on the equipment, and the attention to detail throughout everything is next level. Even the pricing card was beautifully thought out. And it smelled incredible when we walked in. This is a studio that clearly cares about every touchpoint.",
      classExperience: "We took Ashley's non-heated class and she used the Pilates ball in such a fun and challenging way. Even without the heat, we were working up a sweat. They offer both heated and non-heated mat classes - no reformers here, it's all mat work. The class was accessible but still had moments that pushed you. Ashley was engaging and creative with the props.",
      vibe: "Cozy, welcoming, and elevated without being pretentious. Briiomare started as a Pilates sock brand rooted in community, and you can feel that origin story in the studio. It's built with warmth and purpose. The standalone building gives it a private, intimate feel - like you're going to someone's really well-designed home studio rather than a commercial space.",
      knowBeforeYouGo: "Drop-in is $35 and the intro offer is 2 classes for $35, which is one of the best intro deals we've seen. Easy metered parking on the street. No reformers - they only do heated and non-heated mat classes. The studio is tucked away off Robertson in a standalone building so look for the address carefully. Definitely check them out if you're in Beverly Hills."
    },
    videoId: null, color: "#D4C0B0",
  },
  {
    id: "s12", name: "Karen Lord Pilates", neighborhood: "West Hollywood", address: "7024 Melrose Ave, Los Angeles, CA",
    zip: "90038", classTypes: ["Reformer", "Private Reformer", "Tower Reformer"],
    dropInPrice: "$46", priceTier: "$$$", introOffer: "First class $30",
    bookingUrl: "https://www.karenlordpilatesmovement.com/melrose", instagram: "@karenlordpilates",
    tags: { level: "All Levels" }, parkingType: "Valet Parking", parkingEase: "Easy",
    brand: "Karen Lord Pilates",
    goodToKnow: ["Complimentary valet parking - enter from the back, not the front", "Private training room with two tower reformers - stunning", "Large reformer room fits a lot of students - corrections may be limited", "Great merch wall and lounge area with a big couch"],
    bestFor: "Anyone who wants a beautifully designed, larger-format reformer studio with complimentary valet parking and the option for private tower reformer sessions.",
    rating: 4.25, ratings: { aesthetic: 5, music: 3.5, cleanliness: 5, difficulty: 3.5 },
    reviewCount: 0,
    gallery: [],
    heroReview: "I am obsessed with the layout and design of this studio. They have a private training room with tower reformers and such a large space for the main reformer room. The aesthetic is a five - it's not your typical earthy Tulum-vibes studio. It's blacks and grays with a huge crystal in the middle of the room. And they have complimentary valet parking. In LA. That alone is worth mentioning.",
    sections: {
      space: "This is not your typical earthy, Tulum-vibes reformer studio. The aesthetic is blacks and grays with a huge crystal in the middle of the room. There's a great merch wall, a large lounge area with a big couch, and lockers. The private training room is separate with two gorgeous tower reformers - that room alone is stunning. The main reformer room is large and fits a lot of students, which means you probably won't have trouble getting into a class but the instructor may not always get to you for corrections.",
      classExperience: "The class was definitely harder than the Santa Monica location - could be the instructor, but we felt it. A 3.5 on difficulty. The instructor was incredible and the energy was great. If you're looking for more intensity than what the Santa Monica studio offers, this is your spot. They also offer private reformer sessions in that separate tower room which we'll definitely be back to try.",
      vibe: "The staff was super nice and the space has a real energy to it. It's much larger than the Santa Monica location and feels like a completely different experience even though it's the same brand. The design choices are bold - this isn't a quiet, calming studio. It's making a statement. The lounge area makes you want to hang before and after class.",
      knowBeforeYouGo: "Drop-in is $46, intro offer is your first class for $30. They also have a 3 classes in 30 days deal for $100. Complimentary valet parking is a huge perk - the entrance is actually from the back through the parking lot, not the front doors on the street. Private sessions are $130 and duets are $190. The reformer room is large so if you want more one-on-one attention, book a private."
    },
    videoId: null, color: "#B0A8C0",
  },
  {
    id: "s13", name: "The Pilates Cave", neighborhood: "Santa Monica", address: "3250 Pico Blvd, Santa Monica, CA",
    zip: "90405", classTypes: ["Reformer", "Mat", "Heated Mat"],
    dropInPrice: "$45", priceTier: "$$", introOffer: "First class $35",
    bookingUrl: "https://thepilatescave.com/pilates-cave/", instagram: "@thepilatescave",
    tags: { level: "All Levels" }, parkingType: "Street Parking", parkingEase: "Moderate",
    brand: "The Pilates Cave",
    goodToKnow: ["This is their newest and largest location with both mat and reformer caves", "Sauna cave with two large saunas and two large showers", "Bring a towel for heated mat classes - not provided, mats are included", "Memberships work across all three locations"],
    bestFor: "Anyone who wants the full Pilates Cave experience in one location - reformer cave, mat cave, sauna cave, and incredible lighting throughout. This is their flagship.",
    rating: 4.6, ratings: { aesthetic: 5, music: 4.5, cleanliness: 5, difficulty: 4 },
    reviewCount: 0,
    gallery: [],
    heroReview: "Wow, this space is incredible. You have a full equipment room, a mat cave, and a reformer cave. The lighting in the room is exceptional and everything is so on brand for them. The class was insanely spicy - we used bands pretty much the entire time and I will be sore for days. And then there's the sauna cave with two large saunas and two large showers. I'm so impressed.",
    sections: {
      space: "This is The Pilates Cave's newest location and it shows. You have three distinct spaces: the mat cave, the reformer cave, and a full equipment room. The lighting throughout is exceptional - it sets the mood without being gimmicky. Everything is so on brand for them, which I love. And then there's the sauna cave: two large saunas, two large showers, and that same incredible attention to lighting and atmosphere. This is the only location that has both mat and reformer under one roof.",
      classExperience: "We took the mat class and it was insanely spicy. We used resistance bands pretty much the entire time and I will genuinely be sore for days after this. A 4 on difficulty, which is a big step up from the beginner-leaning classes at their other location. They offer Reformer Signature Sculpt, Reformer Beginner Flow, Mat Method Sculpt, and Heated Mat Method Sculpt. The reformer cave has a completely different vibe from the mat side, which I'm excited to try next.",
      vibe: "From the moment you walk in, you can feel the investment they've put into this location. The attention to detail in the lighting, the layout, the branding - it all feels intentional and elevated. It's a luxurious, serene environment that somehow also makes you work incredibly hard. The sauna cave at the end is the perfect reset after class.",
      knowBeforeYouGo: "Drop-in is $45, first class intro is $35. They also have a 3-class intro pack for $95 ($32/class). Bring a towel for heated mat classes - they're not provided, but mats are included. Your membership works across all three Pilates Cave locations, which is a huge perk in LA. The reformer Signature Sculpt class requires Pilates experience or at least 5 beginner flow classes first."
    },
    videoId: null, color: "#C0B8A8",
  },
];

// Auto-populate neighborhoods from studio data
const NEIGHBORHOODS = [...new Set(STUDIOS.map(s => s.neighborhood))].sort();

// Curated class type categories for browsing
const CLASS_TYPES = ["Reformer Pilates", "Mat Pilates", "Heated Pilates", "Lagree", "Sculpt", "Hot Yoga"];

// Map browse categories to actual studio class types for search
const CLASS_TYPE_MAP = {
  "Reformer Pilates": ["Reformer", "Power Reformer", "Cadillac Reformer", "Modern Reformer", "Semi-Private Reformer", "Private Reformer", "Tower Reformer"],
  "Mat Pilates": ["Mat", "Non-Heated Mat Pilates", "Pilates", "Mat & Tower Pilates"],
  "Heated Pilates": ["Heated HIIT Pilates", "Heated Mat Pilates", "Power Pilates", "Heated Mat"],
  "Lagree": ["Lagree", "Megaformer"],
  "Sculpt": ["Sculpt", "Full Body Sculpt", "Booty & Abs"],
  "Hot Yoga": ["Hot Yoga"],
};

const COMMUNITY_REVIEWS = {};

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
    yoga:["yoga","vinyasa","power yoga","hot yoga"],
    hiit:["hiit","high intensity","cardio"],
    heated:["heated","heat","hot","infrared"],
    sculpt:["sculpt","sculpting","full body sculpt","booty"],
    lagree:["lagree","megaformer"],
  };
  let matchedTypes = [];
  for (const [type,kws] of Object.entries(catMap)) {
    if (kws.some(k=>q.includes(k))) matchedTypes.push(type);
  }

  // Also check if query matches a browse category name
  for (const [category, mappedTypes] of Object.entries(CLASS_TYPE_MAP)) {
    if (q.includes(category.toLowerCase())) {
      matchedTypes.push(...mappedTypes.map(t=>t.toLowerCase()));
    }
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
      const sTypes = s.classTypes.map(t=>t.toLowerCase()).join(" ");
      return matchedTypes.some(mt => sTypes.includes(mt));
    });
  }
  if (matchedVibes.length > 0) {
    results = results.filter(s => {
      const allText = [s.tags.level, s.parkingType, s.parkingEase, ...(s.goodToKnow||[]), s.bestFor].join(" ").toLowerCase();
      return matchedVibes.some(v => allText.includes(v));
    });
  }

  // Fallback text search if no smart matches
  if (results.length === 0 || (!matchedHood && matchedTypes.length === 0 && !zipMatch && matchedVibes.length === 0 && !isNearMe)) {
    results = studios.filter(s => {
      const allText = [s.tags.level, s.parkingType, s.parkingEase, s.name, s.neighborhood, ...(s.goodToKnow||[]), s.bestFor, ...s.classTypes].join(" ").toLowerCase();
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
  const [showScrollTop,setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {page==="partner" && <PartnerPage navigate={navigate} />}
      </main>
      <footer style={{background:BRAND.red,padding:"48px clamp(16px,4vw,48px) 32px",color:"#FEEBAB"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:32}}>
          <div>
            <div style={{marginBottom:12}}><BookdLogo height={28} color="#FEEBAB" /></div>
            <div style={{fontSize:"0.85rem",opacity:0.6,marginBottom:8}}>Honest wellness reviews for LA.</div>
            <a href="mailto:bookdwithus@gmail.com" style={{fontSize:"0.82rem",color:"#FEEBAB",textDecoration:"none",opacity:0.8}}>bookdwithus@gmail.com</a>
          </div>
          <div style={{display:"flex",gap:32}}>
            <div style={{display:"flex",flexDirection:"column",gap:10,fontSize:"0.82rem"}}>
              <span style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.4,marginBottom:4}}>Navigate</span>
              <span style={{cursor:"pointer",opacity:0.7}} onClick={()=>navigate("home")}>Home</span>
              <span style={{cursor:"pointer",opacity:0.7}} onClick={()=>searchAndGo("")}>All Studios</span>
              <span style={{cursor:"pointer",opacity:0.7}} onClick={()=>navigate("glossary")}>How We Rate</span>
              <span style={{cursor:"pointer",opacity:0.7}} onClick={()=>navigate("about")}>Our Story</span>
              <span style={{cursor:"pointer",opacity:0.7}} onClick={()=>navigate("partner")}>Partner With Us</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10,fontSize:"0.82rem"}}>
              <span style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.4,marginBottom:4}}>Follow</span>
              <a href="https://instagram.com/bookdwithus" target="_blank" rel="noopener noreferrer" style={{color:"#FEEBAB",textDecoration:"none",opacity:0.7}}>Instagram</a>
              <a href="https://tiktok.com/@bookdwithus" target="_blank" rel="noopener noreferrer" style={{color:"#FEEBAB",textDecoration:"none",opacity:0.7}}>TikTok</a>
              <a href="https://bookdwithus.substack.com" target="_blank" rel="noopener noreferrer" style={{color:"#FEEBAB",textDecoration:"none",opacity:0.7}}>Substack</a>
            </div>
          </div>
        </div>
        <div style={{maxWidth:1100,margin:"24px auto 0",paddingTop:20,borderTop:"1px solid rgba(254,235,171,0.15)",fontSize:"0.72rem",opacity:0.35}}>
          © 2026 bookd with us. All rights reserved.
        </div>
      </footer>
      {/* Scroll to top */}
      {showScrollTop && (
        <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{position:"fixed",bottom:28,right:28,width:44,height:44,borderRadius:"50%",background:BRAND.red,color:"#FEEBAB",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1.1rem",boxShadow:"0 4px 16px rgba(140,45,50,0.25)",zIndex:999,transition:"opacity 0.3s,transform 0.3s",animation:"fadeUp 0.3s ease"}}>↑</div>
      )}
      <style>{`
        ::selection { background: rgba(196,168,139,0.25); }
        .dark-input::placeholder { color: rgba(254,235,171,0.35); }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pillFadeIn { from { opacity:0; transform:translateY(8px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
        footer span:hover, footer a:hover { opacity: 1 !important; text-decoration: underline; text-underline-offset: 3px; }
      `}</style>
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────
function Nav({ currentPage, navigate, searchAndGo, mobileMenu, setMobileMenu }) {
  const [q,setQ] = useState("");
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,height:72,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(44,37,34,0.06)",zIndex:1000,display:"flex",alignItems:"center",padding:"0 clamp(16px,4vw,48px)",gap:16}}>
      <div onClick={()=>navigate("home")} style={{cursor:"pointer",flexShrink:0}}>
        <BookdLogo height={24} />
      </div>
      {/* Search bar - left-leaning */}
      <div style={{flex:"1 1 300px",maxWidth:400,position:"relative"}} className="nav-search">
        <input type="text" value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&q.trim()){searchAndGo(q.trim());setQ("");}}}
          placeholder='Search'
          style={{width:"100%",background:"rgba(44,37,34,0.04)",border:"1px solid rgba(44,37,34,0.06)",borderRadius:100,padding:"10px 16px 10px 38px",fontSize:"0.84rem",color:"#2C2522",outline:"none",fontFamily:"inherit"}} />
        <span style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",opacity:0.25,fontSize:"0.9rem",pointerEvents:"none"}}>⌕</span>
      </div>
      <div style={{flex:1}} />
      <div style={{display:"flex",alignItems:"center",gap:20,fontSize:"0.84rem",fontWeight:600,flexShrink:0,color:BRAND.red}} className="nd">
        <span onClick={()=>navigate("home")} style={{cursor:"pointer",opacity:currentPage==="home"?1:0.55}}>Home</span>
        <span onClick={()=>searchAndGo("")} style={{cursor:"pointer",opacity:currentPage==="search"?1:0.55}}>All Studios</span>
        <span onClick={()=>navigate("glossary")} style={{cursor:"pointer",opacity:currentPage==="glossary"?1:0.55}}>How We Rate</span>
        <span onClick={()=>navigate("about")} style={{cursor:"pointer",opacity:currentPage==="about"?1:0.55}}>Our Story</span>
        <span onClick={()=>navigate("partner")} style={{cursor:"pointer",opacity:currentPage==="partner"?1:0.55}}>Partner With Us</span>
      </div>
      <div className="nm" onClick={()=>setMobileMenu(!mobileMenu)} style={{cursor:"pointer",padding:8,display:"none",flexDirection:"column",gap:4}}>
        <div style={{width:20,height:2,background:BRAND.red,borderRadius:1}} /><div style={{width:20,height:2,background:BRAND.red,borderRadius:1}} /><div style={{width:14,height:2,background:BRAND.red,borderRadius:1}} />
      </div>
      {mobileMenu && <div style={{position:"absolute",top:72,left:0,right:0,background:"rgba(255,255,255,0.98)",backdropFilter:"blur(16px)",padding:"16px clamp(16px,4vw,48px) 20px",display:"flex",flexDirection:"column",gap:14,fontSize:"0.95rem",fontWeight:600,borderBottom:"1px solid rgba(44,37,34,0.06)",color:BRAND.red}}>
        <span onClick={()=>{navigate("home");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>Home</span>
        <span onClick={()=>{searchAndGo("");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>All Studios</span>
        <span onClick={()=>{navigate("glossary");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>How We Rate</span>
        <span onClick={()=>{navigate("about");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>Our Story</span>
        <span onClick={()=>{navigate("partner");setMobileMenu(false);}} style={{cursor:"pointer",padding:"8px 0"}}>Partner With Us</span>
      </div>}
      <style>{`@media(max-width:640px){.nd{display:none!important}.nm{display:flex!important}.nav-search{max-width:200px!important}}`}</style>
    </nav>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────
function HomePage({ navigate, searchAndGo }) {
  const [heroSearch,setHeroSearch] = useState("");
  const topPicks = STUDIOS.filter(s=>s.isFavorite);
  const bestDeals = STUDIOS.filter(s=>s.introOffer && s.introOffer !== "Check website for intro offers").sort((a,b)=>parseFloat(a.dropInPrice.replace(/[^0-9.]/g,""))-parseFloat(b.dropInPrice.replace(/[^0-9.]/g,""))).slice(0,4);
  const QUICK = ["Reformer Pilates","Mat Pilates","Pilates in West Hollywood","Pilates in Santa Monica"];

  return <div>
    {/* Hero */}
    <div style={{background:BRAND.butterLight}}>
    <section style={{padding:"clamp(44px,7vw,64px) clamp(16px,4vw,48px) clamp(32px,5vw,52px)",textAlign:"center",maxWidth:760,margin:"0 auto"}}>
      <div style={{marginBottom:20,display:"flex",justifyContent:"center"}}><BookdLogo height={66} /></div>
      <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.5rem,3.8vw,2.4rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:24}}>
        workout with us.<br/><span style={{fontStyle:"italic",color:BRAND.red}}>your trusted studio tour guides.</span>
      </div>
      {/* Search bar */}
      <div style={{maxWidth:520,margin:"0 auto 24px",position:"relative"}}>
        <input type="text" value={heroSearch} onChange={e=>setHeroSearch(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&heroSearch.trim())searchAndGo(heroSearch.trim());}}
          placeholder='Search'
          style={{width:"100%",background:"#fff",border:"1px solid rgba(44,37,34,0.1)",borderRadius:100,padding:"16px 56px 16px 24px",fontSize:"0.95rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxShadow:"0 2px 16px rgba(44,37,34,0.04)"}} />
        <button onClick={()=>{if(heroSearch.trim())searchAndGo(heroSearch.trim());}} style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:BRAND.red,color:"#FEEBAB",border:"none",borderRadius:"50%",width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1rem"}}>↗</button>
      </div>
      {/* Quick searches */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
        {QUICK.map((q,i) => (
          <button key={i} onClick={()=>searchAndGo(q)} style={{background:"rgba(44,37,34,0.04)",border:"1px solid rgba(44,37,34,0.06)",borderRadius:100,padding:"8px 16px",fontSize:"0.78rem",cursor:"pointer",fontFamily:"inherit",color:"rgba(44,37,34,0.6)",transition:"all 0.15s",opacity:0,animation:`pillFadeIn 0.4s ease ${0.1+i*0.08}s forwards`}}
            onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";e.currentTarget.style.borderColor=BRAND.red;}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(44,37,34,0.04)";e.currentTarget.style.color="rgba(44,37,34,0.6)";e.currentTarget.style.borderColor="rgba(44,37,34,0.06)";}}>{q}</button>
        ))}
      </div>
      {/* Studio marquee */}
      <div style={{overflow:"hidden",marginTop:32,opacity:0.35}}>
        <div style={{display:"flex",gap:32,whiteSpace:"nowrap",animation:"marqueeScroll 25s linear infinite"}}>
          {[...STUDIOS,...STUDIOS].map((s,i) => (
            <span key={i} style={{fontSize:"0.78rem",fontFamily:"'Libre Baskerville',Georgia,serif",fontStyle:"italic",color:BRAND.red,display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:"0.5rem",color:BRAND.red}}>✦</span> {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
    </div>

    {/* Brand sentiment strip */}
    <div style={{background:BRAND.red}}>
    <div style={{padding:"32px clamp(16px,4vw,48px) 32px",maxWidth:1100,margin:"0 auto"}}>
      <p style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1rem,2vw,1.3rem)",color:BRAND.butter,lineHeight:1.7,maxWidth:480,fontWeight:400}}>
        Search and discover boutique fitness studios across LA. Read honest reviews, compare ratings, and find the right class for you - all in one place.
      </p>
    </div>
    </div>

    {/* bookd picks */}
    <section style={{padding:"72px clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
        <span style={{background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"4px 12px",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.06em"}}>✦ bookd picks</span>
      </div>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:400,marginBottom:6}}>our current favorites</h2>
      <p style={{fontSize:"0.88rem",color:BRAND.textLight,marginBottom:28,fontWeight:300}}>Discover the studios we are loving.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))",gap:20}}>
        {topPicks.map(s => <StudioCard key={s.id} studio={s} navigate={navigate} featured />)}
      </div>
    </section>

    {/* Best intro deals */}
    {bestDeals.length > 0 && (
    <div style={{background:BRAND.red,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-4,left:-10,right:-10,pointerEvents:"none",opacity:0.06,overflow:"hidden"}}>
        <div style={{display:"flex",gap:24,whiteSpace:"nowrap"}}>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(48px,8vw,72px)",fontStyle:"italic",color:"#FEEBAB"}}>intro offers</span>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(48px,8vw,72px)",fontStyle:"italic",color:"#FEEBAB"}}>intro offers</span>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(48px,8vw,72px)",fontStyle:"italic",color:"#FEEBAB"}}>intro offers</span>
        </div>
      </div>
    <section style={{padding:"72px clamp(16px,4vw,48px)",maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6,color:BRAND.butter}}>best intro deals right now</h2>
      <p style={{fontSize:"0.88rem",color:"rgba(254,235,171,0.6)",marginBottom:24,fontWeight:300}}>First time? These studios have offers worth trying.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,240px),1fr))",gap:14}}>
        {bestDeals.map(s => (
          <div key={s.id} onClick={()=>navigate("studio",s.id)} style={{background:"#fff",borderRadius:16,padding:"20px 22px",cursor:"pointer",transition:"transform 0.2s",position:"relative",overflow:"hidden"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:BRAND.butter}} />
            <div style={{fontSize:"0.95rem",fontWeight:600,marginBottom:2}}>{s.name}</div>
            <div style={{fontSize:"0.72rem",color:BRAND.textLight,marginBottom:10}}>{s.neighborhood} · {s.priceTier}</div>
            <div style={{background:BRAND.butterLight,borderRadius:12,padding:"12px 14px",marginBottom:10}}>
              <div style={{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em",color:BRAND.red,fontWeight:600,marginBottom:4}}>Intro Offer</div>
              <div style={{fontSize:"0.92rem",fontWeight:500,color:BRAND.text}}>{s.introOffer}</div>
            </div>
            <div style={{fontSize:"0.72rem",color:BRAND.textLight}}>Drop-in: {s.dropInPrice}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
    )}

    {/* Browse by neighborhood */}
    <section style={{padding:"72px clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6}}>Browse by neighborhood</h2>
      <p style={{fontSize:"0.88rem",color:BRAND.textLight,marginBottom:24,fontWeight:300}}>We've been everywhere so you don't have to.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,160px),1fr))",gap:10}}>
        {NEIGHBORHOODS.map(n => {
          const count = STUDIOS.filter(s=>s.neighborhood===n).length;
          return <div key={n} onClick={()=>searchAndGo(n)} style={{background:"#fff",border:"1px solid rgba(44,37,34,0.06)",borderLeft:`3px solid ${BRAND.red}`,borderRadius:14,padding:"18px 16px",cursor:"pointer",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";e.currentTarget.style.borderLeftColor="#FEEBAB";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#2C2522";e.currentTarget.style.borderLeftColor=BRAND.red;}}>
            <div style={{fontSize:"0.9rem",fontWeight:500,marginBottom:4}}>{n}</div>
            <div style={{fontSize:"0.72rem",opacity:0.5}}>{count} studio{count!==1?"s":""}</div>
          </div>;
        })}
      </div>
    </section>

    {/* Browse by class type */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.3rem,3vw,1.7rem)",fontWeight:400,marginBottom:6}}>Search by class type</h2>
      <p style={{fontSize:"0.88rem",color:"rgba(44,37,34,0.45)",marginBottom:24,fontWeight:300}}>Find exactly what you're looking for.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
        {CLASS_TYPES.map(t => {
          const mapped = CLASS_TYPE_MAP[t] || [t];
          const count = STUDIOS.filter(s => s.classTypes.some(ct => mapped.some(m => ct.toLowerCase().includes(m.toLowerCase())))).length;
          return (
            <button key={t} onClick={()=>searchAndGo(t)} style={{background:"#fff",border:"1px solid rgba(44,37,34,0.08)",borderRadius:100,padding:"10px 20px",fontSize:"0.84rem",cursor:"pointer",fontFamily:"inherit",color:"#2C2522",transition:"all 0.15s"}}
              onMouseEnter={e=>{e.currentTarget.style.background=BRAND.red;e.currentTarget.style.color="#FEEBAB";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="#2C2522";}}>{t} <span style={{opacity:0.4,fontSize:"0.75rem"}}>({count})</span></button>
          );
        })}
      </div>
    </section>

    {/* Follow us */}
    <section style={{padding:"0 clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{background:BRAND.butterLight,borderRadius:20,padding:"36px clamp(20px,4vw,40px)",textAlign:"center"}}>
        <div style={{fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.08em",color:BRAND.red,fontWeight:600,marginBottom:8}}>Stay in the loop</div>
        <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.1rem,2.5vw,1.5rem)",fontWeight:400,marginBottom:6}}>never miss a new review</h2>
        <p style={{fontSize:"0.85rem",color:BRAND.textMid,fontWeight:300,maxWidth:420,margin:"0 auto 20px"}}>We drop new studio reviews every week. Follow along so you don't miss one.</p>
        <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://instagram.com/bookdwithus" target="_blank" rel="noopener noreferrer" style={{background:BRAND.red,color:"#FEEBAB",borderRadius:100,padding:"12px 24px",fontSize:"0.84rem",fontWeight:500,textDecoration:"none",display:"inline-block"}}>Follow on Instagram</a>
          <a href="https://tiktok.com/@bookdwithus" target="_blank" rel="noopener noreferrer" style={{background:"transparent",color:BRAND.red,border:`1px solid ${BRAND.red}`,borderRadius:100,padding:"12px 24px",fontSize:"0.84rem",fontWeight:500,textDecoration:"none",display:"inline-block"}}>Follow on TikTok</a>
        </div>
      </div>
    </section>

    {/* Where should we go next? */}
    <div style={{background:BRAND.red,position:"relative",overflow:"hidden"}}>
      {/* Background text treatment */}
      <div style={{position:"absolute",top:-4,left:-10,right:-10,pointerEvents:"none",opacity:0.06,overflow:"hidden"}}>
        <div style={{display:"flex",gap:20,whiteSpace:"nowrap"}}>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(48px,8vw,72px)",fontStyle:"italic",color:"#FEEBAB"}}>where should we go next?</span>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(48px,8vw,72px)",fontStyle:"italic",color:"#FEEBAB"}}>where should we go next?</span>
        </div>
      </div>
    <section style={{padding:"72px clamp(16px,4vw,48px)",maxWidth:1100,margin:"0 auto",position:"relative",zIndex:1}}>
      <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.2rem,3vw,1.5rem)",fontWeight:400,marginBottom:6,color:BRAND.butter}}>where should we go next?</h2>
      <p style={{fontSize:"0.85rem",color:"rgba(254,235,171,0.6)",fontWeight:300,lineHeight:1.6,marginBottom:20}}>Know a studio we need to try? Tell us and we'll add it to our list.</p>
      <StudioRequestForm darkMode />
    </section>
    </div>

    {/* Meet your reviewers */}
    <section style={{padding:"72px clamp(16px,4vw,48px) 72px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{background:BRAND.butterLight,borderRadius:20,padding:0,display:"flex",alignItems:"stretch",flexWrap:"wrap",overflow:"hidden"}}>
        <div style={{flexShrink:0,width:"clamp(120px,20vw,180px)"}}>
          <img src="/syd-sam.jpg" alt="Sydney and Sam" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",minHeight:180}} onError={(e)=>{e.target.parentElement.style.display="none";}} />
        </div>
        <div style={{flex:1,minWidth:200,padding:"clamp(24px,3vw,36px)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.1rem,2.5vw,1.4rem)",fontWeight:400,marginBottom:4}}>We're Sydney & Sam.</div>
          <p style={{fontSize:"0.85rem",color:BRAND.textMid,lineHeight:1.6,fontWeight:300,marginBottom:12}}>We turned our boutique fitness obsession into a guide. We actually take the classes, form the opinions, and tell you exactly what we think. The aesthetic, the playlist, and even the parking situation is on our radar.</p>
          <span onClick={()=>navigate("about")} style={{fontSize:"0.82rem",color:BRAND.red,cursor:"pointer",fontWeight:500}}>Read our story →</span>
        </div>
      </div>
    </section>

  </div>;
}

// ─── STUDIO REQUEST FORM ─────────────────────────────────────
function StudioRequestForm({ darkMode = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ studio: "", neighborhood: "", note: "" });

  async function handleSubmit() {
    if (!form.studio) return;
    try {
      await fetch("https://formspree.io/f/mvzynjga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Studio Request",
          studio_name: form.studio,
          neighborhood: form.neighborhood,
          note: form.note,
        }),
      });
      setSent(true);
    } catch (e) {
      alert("Something went wrong. DM us on Instagram instead!");
    }
  }

  if (sent) return (
    <div style={{padding:"32px 0",textAlign:"center"}}>
      <div style={{fontSize:"1.2rem",marginBottom:8,color:darkMode?BRAND.butter:BRAND.text}}>✦</div>
      <div style={{fontSize:"0.95rem",fontWeight:500,marginBottom:4,color:darkMode?BRAND.butter:"inherit"}}>Got it!</div>
      <p style={{fontSize:"0.82rem",color:darkMode?"rgba(254,235,171,0.6)":BRAND.textMid,fontWeight:300}}>We'll add it to our list. Stay tuned for the review.</p>
    </div>
  );

  const iS = darkMode
    ? {width:"100%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(254,235,171,0.2)",borderRadius:10,padding:"10px 14px",fontSize:"0.85rem",color:"#FEEBAB",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}
    : {width:"100%",background:"rgba(44,37,34,0.02)",border:"1px solid rgba(44,37,34,0.08)",borderRadius:10,padding:"10px 14px",fontSize:"0.85rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxSizing:"border-box"};

  const labelColor = darkMode ? "rgba(254,235,171,0.5)" : BRAND.textLight;

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
        <div>
          <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.06em",color:labelColor,marginBottom:6,fontWeight:500}}>Studio Name</div>
          <input className={darkMode?"dark-input":""} style={iS} placeholder="e.g. Forma Pilates" value={form.studio} onChange={e=>setForm({...form,studio:e.target.value})} />
        </div>
        <div>
          <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.06em",color:labelColor,marginBottom:6,fontWeight:500}}>Neighborhood</div>
          <input className={darkMode?"dark-input":""} style={iS} placeholder="e.g. West Hollywood" value={form.neighborhood} onChange={e=>setForm({...form,neighborhood:e.target.value})} />
        </div>
      </div>
      <div style={{marginBottom:14}}>
        <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.06em",color:labelColor,marginBottom:6,fontWeight:500}}>Why should we try it? <span style={{fontWeight:300,textTransform:"none",letterSpacing:0}}>(optional)</span></div>
        <input className={darkMode?"dark-input":""} style={iS} placeholder="My favorite class is... / The vibes are... / You have to try..." value={form.note} onChange={e=>setForm({...form,note:e.target.value})} />
      </div>
      <button onClick={handleSubmit} disabled={!form.studio} style={{
        background:form.studio?BRAND.butter:"rgba(255,255,255,0.1)",
        color:form.studio?BRAND.red:"rgba(254,235,171,0.3)",
        border:"none",borderRadius:100,padding:"11px 28px",fontSize:"0.84rem",fontWeight:500,
        cursor:form.studio?"pointer":"default",fontFamily:"inherit",transition:"all 0.2s",width:"100%"
      }}>Submit Request</button>
    </div>
  );
}

// ─── STUDIO CARD ─────────────────────────────────────────────
function StudioCard({ studio, navigate, featured=false }) {
  const s = studio;
  return (
    <div onClick={()=>navigate("studio",s.id)} style={{background:"#fff",borderRadius:18,overflow:"hidden",cursor:"pointer",transition:"transform 0.2s,box-shadow 0.2s",boxShadow:"0 1px 3px rgba(44,37,34,0.03)",border:featured?"1px solid rgba(140,45,50,0.15)":"1px solid rgba(44,37,34,0.05)",position:"relative",animation:"fadeUp 0.4s ease both",display:"flex",flexDirection:"column"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(140,45,50,0.12)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 1px 3px rgba(44,37,34,0.03)";}}>
      <div style={{height:6,background:BRAND.red}} />
      {featured && s.isFavorite && <div style={{position:"absolute",top:16,right:14,background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"3px 10px",fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.05em"}}>bookd pick</div>}
      <div style={{padding:"22px 22px 18px",flex:1}}>
        <div style={{fontSize:"1.05rem",fontWeight:600,marginBottom:4,letterSpacing:"-0.01em"}}>{s.name}</div>
        <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.4)",marginBottom:12}}>{s.neighborhood} · {s.priceTier}</div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14,background:"rgba(254,235,171,0.3)",padding:"8px 12px",borderRadius:10}}>
          <StarRating rating={s.rating} count={s.reviewCount} />
        </div>
        <div style={{marginBottom:14}}>
          <span style={{background:"rgba(140,45,50,0.1)",borderRadius:100,padding:"3px 10px",fontSize:"0.68rem",color:"#8C2D32",fontWeight:500}}>{s.tags.level}</span>
        </div>
        {featured && s.favoriteNote ? (
          <div style={{fontSize:"0.82rem",color:BRAND.red,fontStyle:"italic",lineHeight:1.55,fontWeight:400,padding:"10px 14px",background:"rgba(140,45,50,0.04)",borderRadius:10}}>"{s.favoriteNote}"</div>
        ) : (
          <div style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.55)",lineHeight:1.65,fontWeight:300,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>"{s.heroReview}"</div>
        )}
      </div>
      <div style={{background:"rgba(254,235,171,0.15)",padding:"12px 22px",fontSize:"0.72rem",color:"rgba(44,37,34,0.4)",display:"flex",gap:6,flexWrap:"wrap"}}>
        {s.classTypes.map((t,i) => <span key={i}>{i>0?"·":""} {t}</span>)}
      </div>
    </div>
  );
}

// ─── SEARCH PAGE ─────────────────────────────────────────────
function SearchPage({ query, navigate, searchAndGo }) {
  const [localQ,setLocalQ] = useState(query||"");
  const [filters,setFilters] = useState({ neighborhood: "", priceTier: "", parkingEase: "", level: "" });
  const baseResults = useMemo(() => smartStudioSearch(localQ, STUDIOS), [localQ]);
  const results = useMemo(() => {
    return baseResults.filter(s => {
      if (filters.neighborhood && s.neighborhood !== filters.neighborhood) return false;
      if (filters.priceTier && !s.priceTier.includes(filters.priceTier)) return false;
      if (filters.parkingEase && s.parkingEase !== filters.parkingEase) return false;
      if (filters.level && s.tags.level !== filters.level) return false;
      return true;
    });
  }, [baseResults, filters]);
  const hasFilters = Object.values(filters).some(v => v);

  useEffect(() => { setLocalQ(query||""); }, [query]);

  const filterBtn = (label, value, filterKey) => (
    <button onClick={()=>setFilters({...filters,[filterKey]:filters[filterKey]===value?"":value})} style={{
      background:filters[filterKey]===value?BRAND.red:"#fff",
      color:filters[filterKey]===value?"#FEEBAB":"rgba(44,37,34,0.6)",
      border:`1px solid ${filters[filterKey]===value?BRAND.red:"rgba(44,37,34,0.08)"}`,
      borderRadius:100,padding:"6px 14px",fontSize:"0.76rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"
    }}>{label}</button>
  );

  return <div style={{padding:"32px clamp(16px,4vw,48px) 80px",maxWidth:1100,margin:"0 auto"}}>
    {/* Search bar */}
    <div style={{maxWidth:560,marginBottom:20,position:"relative"}}>
      <input type="text" value={localQ} onChange={e=>{setLocalQ(e.target.value);}} onKeyDown={e=>{if(e.key==="Enter")searchAndGo(localQ);}}
        placeholder='Search by studio, class type, neighborhood, or zip code...'
        style={{width:"100%",background:"#fff",border:"1px solid rgba(44,37,34,0.1)",borderRadius:100,padding:"14px 20px 14px 42px",fontSize:"0.9rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxShadow:"0 1px 8px rgba(44,37,34,0.03)"}} />
      <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",opacity:0.25,fontSize:"0.95rem"}}>⌕</span>
    </div>

    {/* Filter bar */}
    <div style={{marginBottom:24,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"}}>
      <span style={{fontSize:"0.72rem",color:BRAND.textLight,fontWeight:500,marginRight:4}}>Filter:</span>
      {NEIGHBORHOODS.map(n => filterBtn(n, n, "neighborhood"))}
      <span style={{width:1,height:16,background:"rgba(44,37,34,0.1)",margin:"0 4px"}} />
      {["$","$$","$$$","$$$$"].map(p => filterBtn(p, p, "priceTier"))}
      <span style={{width:1,height:16,background:"rgba(44,37,34,0.1)",margin:"0 4px"}} />
      {["Easy","Moderate","Tricky"].map(e => filterBtn(`Parking: ${e}`, e, "parkingEase"))}
      {hasFilters && <button onClick={()=>setFilters({neighborhood:"",priceTier:"",parkingEase:"",level:""})} style={{background:"none",border:"none",color:BRAND.red,fontSize:"0.76rem",cursor:"pointer",fontFamily:"inherit",fontWeight:500,padding:"6px 8px"}}>Clear all</button>}
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
  const otherLocations = s.brand ? STUDIOS.filter(x => x.id !== s.id && x.brand === s.brand) : [];
  const similar = STUDIOS.filter(x => x.id !== s.id && (!s.brand || x.brand !== s.brand) && (x.neighborhood === s.neighborhood || x.classTypes.some(t => s.classTypes.includes(t)))).slice(0,3);

  return <div style={{maxWidth:820,margin:"0 auto",padding:"28px clamp(16px,4vw,48px) 80px"}}>
    <span onClick={()=>navigate("search","")} style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.45)",cursor:"pointer",marginBottom:24,display:"inline-block"}}>← Back to studios</span>

    {/* Header */}
    <div style={{marginBottom:32,animation:"fadeUp 0.5s ease"}}>
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
        {s.isFavorite && <span style={{background:"rgba(140,45,50,0.12)",color:"#8C2D32",borderRadius:100,padding:"4px 12px",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.04em"}}>✦ bookd pick</span>}
      </div>

      {/* Tags */}
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
        <span style={{background:"rgba(140,45,50,0.12)",borderRadius:100,padding:"6px 16px",fontSize:"0.8rem",color:"#8C2D32",fontWeight:500}}>{s.tags.level}</span>
        <span style={{background:"rgba(44,37,34,0.04)",borderRadius:100,padding:"6px 16px",fontSize:"0.8rem",color:"rgba(44,37,34,0.55)",display:"flex",alignItems:"center",gap:5}}>
          <span style={{fontSize:"0.7rem",opacity:0.45}}>P</span> {s.parkingType} · {s.parkingEase}
        </span>
      </div>

      {/* Quick info bar */}
      <div style={{display:"flex",flexWrap:"wrap",gap:20,fontSize:"0.82rem",color:"rgba(44,37,34,0.55)",padding:"16px 20px",background:"#fff",borderRadius:14,border:"1px solid rgba(44,37,34,0.05)"}}>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>Classes:</span> {s.classTypes.join(", ")}</div>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>Drop-in:</span> {s.dropInPrice} <span style={{color:BRAND.textLight}}>({s.priceTier})</span></div>
        {s.introOffer && <div><span style={{fontWeight:500,color:BRAND.red}}>Intro:</span> {s.introOffer}</div>}
        <div><span style={{fontWeight:500,color:"#2C2522"}}>Parking:</span> {s.parkingType} · {s.parkingEase}</div>
        <div><span style={{fontWeight:500,color:"#2C2522"}}>IG:</span> {s.instagram}</div>
      </div>
    </div>

    {/* Intro offer callout */}
    {s.introOffer && s.introOffer !== "Check website for intro offers" && (
      <div style={{background:BRAND.butterLight,borderRadius:16,padding:"18px 24px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,border:`1px solid ${BRAND.butter}`}}>
        <div>
          <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:BRAND.red,fontWeight:600,marginBottom:4}}>New here?</div>
          <div style={{fontSize:"1rem",fontWeight:600,color:BRAND.text}}>{s.introOffer}</div>
        </div>
        <a href={s.bookingUrl} target="_blank" rel="noopener noreferrer" style={{background:BRAND.red,color:"#FEEBAB",borderRadius:100,padding:"10px 22px",fontSize:"0.82rem",fontWeight:500,textDecoration:"none",display:"inline-block",flexShrink:0}}>Try It</a>
      </div>
    )}

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
      <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.4)",fontWeight:300}}>See the space, the class, the vibe - our full video walkthrough</div>
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
        <div style={{width:28,height:28,borderRadius:"50%",background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.55rem",color:"#FEEBAB",fontWeight:700}}>b</div>
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
    </div>

    {/* Detailed written review sections */}
    <div style={{display:"flex",flexDirection:"column",gap:20,marginBottom:32}}>
      {[
        { key: "space", title: "The Space", icon: "◻" },
        { key: "classExperience", title: "The Class", icon: "◎" },
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

    {/* Booking CTA */}
    <div style={{background:BRAND.red,borderRadius:16,padding:"28px 28px",color:"#FEEBAB",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:40}}>
      <div>
        <div style={{fontSize:"1rem",fontWeight:500,marginBottom:4}}>Ready to try {s.name}?</div>
        <div style={{fontSize:"0.82rem",opacity:0.5,fontWeight:300}}>{s.priceTier} · {s.neighborhood}</div>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a href={s.bookingUrl} target="_blank" rel="noopener noreferrer" style={{background:"#FEEBAB",color:"#2C2522",border:"none",borderRadius:100,padding:"12px 28px",fontSize:"0.86rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit",textDecoration:"none",display:"inline-block"}}>Book a Class</a>
        <a href={`https://instagram.com/${s.instagram.replace("@","")}`} target="_blank" rel="noopener noreferrer" style={{background:"transparent",color:"#FEEBAB",border:"1px solid rgba(254,235,171,0.25)",borderRadius:100,padding:"12px 20px",fontSize:"0.86rem",cursor:"pointer",fontFamily:"inherit",fontWeight:400,textDecoration:"none",display:"inline-block"}}>Follow {s.instagram}</a>
      </div>
    </div>

    {/* Other locations */}
    {otherLocations.length > 0 && (
      <div style={{marginBottom:36}}>
        <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.4rem",fontWeight:400,marginBottom:6}}>other {s.brand} locations</h2>
        <p style={{fontSize:"0.85rem",color:"rgba(44,37,34,0.45)",marginBottom:24,fontWeight:300}}>We've also reviewed {otherLocations.length === 1 ? "this location" : "these locations"}.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,280px),1fr))",gap:16}}>
          {otherLocations.map(x => <StudioCard key={x.id} studio={x} navigate={navigate} />)}
        </div>
      </div>
    )}

    {/* Similar studios */}
    {similar.length > 0 && (
      <div style={{marginBottom:36}}>
        <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.4rem",fontWeight:400,marginBottom:6}}>similar studios we've reviewed</h2>
        <p style={{fontSize:"0.85rem",color:"rgba(44,37,34,0.45)",marginBottom:24,fontWeight:300}}>More options nearby or with similar class types.</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,280px),1fr))",gap:16}}>
          {similar.map(x => <StudioCard key={x.id} studio={x} navigate={navigate} />)}
        </div>
      </div>
    )}

    {/* ═══ COMMUNITY REVIEWS ═══ */}
    <CommunityReviewsSection studioId={s.id} studioName={s.name} classTypes={s.classTypes} reviews={communityReviews[s.id]||[]} addReview={addReview} />
  </div>;
}

// ─── COMMUNITY REVIEWS SECTION ───────────────────────────────
function CommunityReviewsSection({ studioId, studioName, classTypes, reviews, addReview }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name:"", text:"", classType:"", instructor:"" });
  const [submitted, setSubmitted] = useState(false);

  const sorted = useMemo(() => {
    return [...reviews].sort((a,b)=>new Date(b.date)-new Date(a.date));
  }, [reviews]);

  function handleSubmit() {
    if (!formData.name||!formData.text) return;
    addReview(studioId, {
      id: "cr"+Date.now(),
      name: formData.name,
      date: new Date().toISOString().slice(0,10),
      text: formData.text,
      classType: formData.classType,
      instructor: formData.instructor,
    });
    setSubmitted(true);
    setShowForm(false);
    setFormData({ name:"", text:"", classType:"", instructor:"" });
    setTimeout(()=>setSubmitted(false), 4000);
  }

  const iS = {width:"100%",background:"rgba(44,37,34,0.02)",border:"1px solid rgba(44,37,34,0.1)",borderRadius:12,padding:"12px 16px",fontSize:"0.88rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxSizing:"border-box"};

  return (
    <div style={{marginBottom:32}}>
      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:12,marginBottom:20}}>
        <div>
          <div style={{fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginBottom:6}}>Community Comments</div>
          <span style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.3rem",fontWeight:400}}>{reviews.length} comment{reviews.length!==1?"s":""}</span>
        </div>
        <button onClick={()=>setShowForm(!showForm)} style={{background:showForm?"rgba(44,37,34,0.06)":BRAND.red,color:showForm?"#2C2522":"#fff",border:"none",borderRadius:100,padding:"8px 18px",fontSize:"0.8rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>
          {showForm ? "Cancel" : "+ Leave a Comment"}
        </button>
      </div>

      {/* Submitted toast */}
      {submitted && (
        <div style={{background:"rgba(138,159,112,0.1)",border:"1px solid rgba(138,159,112,0.25)",borderRadius:14,padding:"14px 20px",marginBottom:16,display:"flex",alignItems:"center",gap:10,fontSize:"0.86rem",color:"#6B8A55",animation:"fadeUp 0.3s ease"}}>
          <span>✓</span> Your comment has been posted. Thanks for sharing your experience!
        </div>
      )}

      {/* Comment form */}
      {showForm && (
        <div style={{background:"#fff",borderRadius:18,border:"1px solid rgba(44,37,34,0.06)",padding:"24px 26px",marginBottom:20,animation:"fadeUp 0.3s ease"}}>
          <div style={{fontSize:"0.95rem",fontWeight:600,marginBottom:4}}>Share your experience at {studioName}</div>
          <div style={{fontSize:"0.78rem",color:"rgba(44,37,34,0.45)",marginBottom:20,fontWeight:300}}>Your comment helps others find the right studio.</div>

          <div style={{display:"flex",flexDirection:"column",gap:16}}>
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

            {/* Comment text */}
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Your Comment</div>
              <textarea style={{...iS,minHeight:100,resize:"vertical",borderRadius:12,lineHeight:1.6}} placeholder="What was the class like? Would you go back? Any tips for first-timers?" value={formData.text} onChange={e=>setFormData({...formData,text:e.target.value})} />
            </div>

            <button onClick={handleSubmit} disabled={!formData.name||!formData.text} style={{
              background:(formData.name&&formData.text)?BRAND.red:"rgba(44,37,34,0.1)",
              color:(formData.name&&formData.text)?"#fff":"rgba(44,37,34,0.3)",
              border:"none",borderRadius:100,padding:"13px 0",fontSize:"0.88rem",fontWeight:500,cursor:(formData.name&&formData.text)?"pointer":"default",
              fontFamily:"inherit",width:"100%",transition:"all 0.2s",
            }}>Post Comment</button>
          </div>
        </div>
      )}

      {/* Comment list */}
      {sorted.length === 0 ? (
        <div style={{background:"#fff",borderRadius:16,border:"1px solid rgba(44,37,34,0.05)",padding:"48px 20px",textAlign:"center"}}>
          <div style={{fontSize:"1.5rem",marginBottom:10,opacity:0.25}}>💬</div>
          <div style={{fontSize:"0.9rem",color:"rgba(44,37,34,0.45)",marginBottom:6}}>No community comments yet.</div>
          <div style={{fontSize:"0.8rem",color:"rgba(44,37,34,0.3)",fontWeight:300}}>Be the first to share your experience!</div>
        </div>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {sorted.map((r, idx) => (
            <div key={r.id} style={{background:"#fff",borderRadius:16,border:"1px solid rgba(44,37,34,0.05)",padding:"20px 24px",animation:`fadeUp 0.3s ease ${idx*0.04}s both`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:6}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
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
                <span style={{fontSize:"0.72rem",color:"rgba(44,37,34,0.35)"}}>{new Date(r.date+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
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
      description: "How challenging the class actually is. This isn't a judgment - a 2 isn't bad and a 5 isn't better. It's a guide so you know what you're walking into. We rate based on the hardest class format they offer, and we'll note if they have beginner-friendly options.",
      scale: [
        { stars: 5, text: "Elite. You will be humbled. Previous fitness experience strongly recommended." },
        { stars: 4, text: "Challenging. You'll feel it for two days. Solid baseline fitness helpful." },
        { stars: 3, text: "Moderate. A good workout for most people. Accessible with effort." },
        { stars: 2, text: "Approachable. Great for beginners or low-impact days. You'll work but won't suffer." },
        { stars: 1, text: "Gentle. Restorative, meditative, stretch-focused. The goal isn't intensity." },
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
          Every studio on bookd is reviewed in person by our team. We take the class, use the locker room, fight for parking, and tell you exactly what we found.
        </p>
      </div>

      {/* Overall score explanation */}
      <div style={{background:"#fff",borderRadius:18,padding:"28px 30px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
          <div style={{width:36,height:36,borderRadius:10,background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#FEEBAB",fontSize:"0.7rem",fontWeight:700}}>B</div>
          <div>
            <div style={{fontWeight:600,fontSize:"0.95rem"}}>The bookd score</div>
            <div style={{fontSize:"0.76rem",color:"rgba(44,37,34,0.45)"}}>Our overall rating out of 5</div>
          </div>
        </div>
        <p style={{fontSize:"0.88rem",lineHeight:1.75,color:"rgba(44,37,34,0.65)",fontWeight:300}}>
          The overall bookd score is our holistic take on the studio - not a simple average of the four categories below. It's how we'd answer the question "should I go here?" It factors in the vibe, the instructors, the experience as a whole, and whether we'd genuinely go back. A studio can score lower in individual categories but still earn a high overall score if the total experience is exceptional.
        </p>
      </div>

      {/* The four rating categories */}
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

      {/* Price & Parking - not rated, shown as info */}
      <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:16}}>
        <div style={{background:"#fff",borderRadius:18,border:"1px solid rgba(44,37,34,0.05)",overflow:"hidden"}}>
          <div style={{padding:"24px 28px"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#B8C4A0",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.85rem",fontWeight:600}}>$</div>
              <div style={{fontSize:"1.05rem",fontWeight:600}}>Price</div>
            </div>
            <p style={{fontSize:"0.88rem",lineHeight:1.75,color:"rgba(44,37,34,0.6)",fontWeight:300,marginBottom:16}}>
              We don't rate price - we just show you what it costs. Every studio page lists the drop-in price and the intro offer so you know exactly what you're walking into.
            </p>
          </div>
          <div style={{background:"rgba(44,37,34,0.015)",borderTop:"1px solid rgba(44,37,34,0.04)",padding:"16px 28px 20px"}}>
            {[
              { tier: "$", desc: "Under $30/class" },
              { tier: "$$", desc: "$30-45/class" },
              { tier: "$$$", desc: "$45-60/class" },
              { tier: "$$$$", desc: "$60+/class" },
            ].map((p,i) => (
              <div key={i} style={{display:"flex",gap:14,padding:"8px 0",borderBottom:i<3?"1px solid rgba(44,37,34,0.04)":"none",alignItems:"center"}}>
                <span style={{fontWeight:600,fontSize:"0.9rem",minWidth:48,color:BRAND.red}}>{p.tier}</span>
                <span style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.6)",fontWeight:300}}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#fff",borderRadius:18,border:"1px solid rgba(44,37,34,0.05)",overflow:"hidden"}}>
          <div style={{padding:"24px 28px"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
              <div style={{width:36,height:36,borderRadius:10,background:"#9BB5C4",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.85rem",fontWeight:600}}>P</div>
              <div style={{fontSize:"1.05rem",fontWeight:600}}>Parking</div>
            </div>
            <p style={{fontSize:"0.88rem",lineHeight:1.75,color:"rgba(44,37,34,0.6)",fontWeight:300,marginBottom:16}}>
              It's LA - parking matters. We don't score it, we just tell you the situation. Every studio shows the parking type and how easy (or not) it is to deal with.
            </p>
          </div>
          <div style={{background:"rgba(44,37,34,0.015)",borderTop:"1px solid rgba(44,37,34,0.04)",padding:"16px 28px 20px"}}>
            <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginBottom:10}}>Type</div>
            {["Street Parking","Metered Parking","Parking Lot","Parking Structure"].map((t,i) => (
              <div key={i} style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.6)",padding:"4px 0",fontWeight:300}}>{t}</div>
            ))}
            <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.35)",fontWeight:500,marginTop:14,marginBottom:10}}>Ease</div>
            {[
              { ease: "Easy", desc: "Park and walk in, no stress" },
              { ease: "Moderate", desc: "Give yourself an extra 5 minutes" },
              { ease: "Tricky", desc: "Plan ahead or consider biking" },
            ].map((p,i) => (
              <div key={i} style={{display:"flex",gap:14,padding:"6px 0",borderBottom:i<2?"1px solid rgba(44,37,34,0.04)":"none",alignItems:"center"}}>
                <span style={{fontWeight:500,fontSize:"0.85rem",minWidth:80}}>{p.ease}</span>
                <span style={{fontSize:"0.82rem",color:"rgba(44,37,34,0.6)",fontWeight:300}}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div style={{textAlign:"center",marginTop:40,padding:"32px 20px",background:"rgba(44,37,34,0.02)",borderRadius:16}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.2rem",fontWeight:400,marginBottom:8}}>that's our bookd system.</div>
        <p style={{fontSize:"0.85rem",color:BRAND.textMid,maxWidth:440,margin:"0 auto 20px",fontWeight:300,lineHeight:1.6}}>
          We take the classes and write our own reviews. What you see is what we actually think. Love, Sydney & Sam
        </p>
        <button onClick={()=>navigate("home")} style={{background:BRAND.red,color:"#FEEBAB",border:"none",borderRadius:100,padding:"12px 28px",fontSize:"0.86rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Find a Studio</button>
      </div>
    </div>
  );
}

// ─── ABOUT / OUR STORY ──────────────────────────────────────
function AboutPage({ navigate, searchAndGo }) {
  return (
    <div style={{maxWidth:900,margin:"0 auto",padding:"40px clamp(16px,4vw,48px) 80px"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.8rem,5vw,2.6rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.15}}>
          the story behind bookd
        </div>
      </div>

      {/* Split screen - photo + copy */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 320px), 1fr))",gap:0,marginBottom:40,borderRadius:20,overflow:"hidden",border:"1px solid rgba(44,37,34,0.05)"}}>
        {/* Photo side */}
        <div style={{background:"#E8DDD0",minHeight:360}}>
          <img src="/syd-sam.jpg" alt="Sydney and Sam" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",minHeight:360}} onError={(e)=>{e.target.style.display="none";e.target.parentElement.style.display="flex";e.target.parentElement.style.alignItems="center";e.target.parentElement.style.justifyContent="center";e.target.parentElement.innerHTML='<div style="text-align:center;padding:40px;color:rgba(44,37,34,0.3)"><div style="font-size:2rem;margin-bottom:8px">S + S</div><div style="font-size:0.8rem">Sydney & Sam</div></div>';}} />
        </div>
        {/* Copy side */}
        <div style={{background:BRAND.butterLight,padding:"clamp(28px,4vw,44px)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{fontSize:"0.92rem",lineHeight:1.8,color:"rgba(44,37,34,0.65)",fontWeight:300}}>
            It's a love letter to boutique fitness. It's a studio guide written by two people who are actually in the classes, actually forming the opinions, actually coming back (or not). It's a place where we talk about the vibe and the instructor and the playlist and whether the parking situation is acceptable. It's honest. It's specific. And it's written the way we'd tell a friend, because that's exactly what it is.
          </p>
        </div>
      </div>

      {/* Sydney & Sam cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 260px), 1fr))",gap:16,marginBottom:40}}>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 24px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#FEEBAB",fontSize:"1.1rem",fontWeight:600,margin:"0 auto 14px"}}>S</div>
          <div style={{fontWeight:600,fontSize:"1rem",marginBottom:2}}>Sydney</div>
          <div style={{fontSize:"0.78rem",color:BRAND.textLight,marginBottom:10}}>Co-Founder, bookd with us</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>A digital marketing expert by trade with a deep obsession with Pilates and boutique fitness that turned into very strong opinions. Sydney built bookd to give those opinions a home - and to make finding the right studio as easy as asking a friend who's been to all of them.</p>
          <a href="https://instagram.com/bookdwithus" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:12,fontSize:"0.78rem",color:BRAND.red,fontWeight:500,textDecoration:"none"}}>@bookdwithus</a>
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 24px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:BRAND.butter,display:"flex",alignItems:"center",justifyContent:"center",color:BRAND.red,fontSize:"1.1rem",fontWeight:600,margin:"0 auto 14px"}}>S</div>
          <div style={{fontWeight:600,fontSize:"1rem",marginBottom:2}}>Sam</div>
          <div style={{fontSize:"0.78rem",color:BRAND.textLight,marginBottom:10}}>Co-Founder, bookd with us</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>Founder of Hype Girl Club and Mason Market(ing), Sam has spent years curating wellness events and building community for women across LA. She brought the event expertise, the network, and the conviction that honest reviews could actually help people find their studio.</p>
          <a href="https://instagram.com/bookdwithus" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:12,fontSize:"0.78rem",color:BRAND.red,fontWeight:500,textDecoration:"none"}}>@bookdwithus</a>
        </div>
      </div>

      {/* Substack */}
      <div style={{background:"#fff",borderRadius:16,padding:"24px 28px",border:"1px solid rgba(44,37,34,0.05)",marginBottom:40,textAlign:"center"}}>
        <div style={{fontSize:"0.95rem",fontWeight:500,marginBottom:6}}>Want to read more?</div>
        <p style={{fontSize:"0.82rem",color:BRAND.textMid,lineHeight:1.6,fontWeight:300,maxWidth:400,margin:"0 auto 16px"}}>We write about studio culture, the classes we're loving, and the honest opinions that don't fit in a rating. Follow along on Substack.</p>
        <a href="https://bookdwithus.substack.com" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:BRAND.butterLight,color:BRAND.red,border:`1px solid ${BRAND.butter}`,borderRadius:100,padding:"10px 24px",fontSize:"0.84rem",fontWeight:600,textDecoration:"none",cursor:"pointer"}}>Read our Substack →</a>
      </div>

      {/* CTA */}
      <div style={{background:BRAND.red,borderRadius:20,padding:"36px 28px",textAlign:"center",color:"#FEEBAB"}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.4rem",fontWeight:400,marginBottom:8}}>ready to find your studio?</div>
        <p style={{fontSize:"0.85rem",opacity:0.7,maxWidth:360,margin:"0 auto 20px",fontWeight:300,lineHeight:1.6}}>We've reviewed every studio we've been to. Search by class type, neighborhood, or just tell us what you're in the mood for.</p>
        <button onClick={()=>searchAndGo("")} style={{background:"#FEEBAB",color:BRAND.red,border:"none",borderRadius:100,padding:"12px 32px",fontSize:"0.88rem",fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Explore Studios</button>
      </div>
    </div>
  );
}

// ─── PARTNER WITH US ─────────────────────────────────────────
function PartnerPage({ navigate }) {
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name:"", email:"", company:"", message:"" });

  const iS = {width:"100%",background:"rgba(44,37,34,0.02)",border:"1px solid rgba(44,37,34,0.1)",borderRadius:12,padding:"12px 16px",fontSize:"0.88rem",color:"#2C2522",outline:"none",fontFamily:"inherit",boxSizing:"border-box"};

  async function handleSubmit() {
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    try {
      await fetch("https://formspree.io/f/mvzynjga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          "studio_or_brand": formData.company,
          message: formData.message,
        }),
      });
      setFormSent(true);
    } catch (e) {
      alert("Something went wrong - please email us directly at bookdwithus@gmail.com");
    }
    setSending(false);
  }

  return (
    <div style={{maxWidth:640,margin:"0 auto",padding:"40px clamp(16px,4vw,48px) 80px"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"clamp(1.8rem,5vw,2.6rem)",fontWeight:400,letterSpacing:"-0.02em",lineHeight:1.15,marginBottom:14}}>
          partner with bookd
        </div>
        <p style={{fontSize:"0.95rem",color:BRAND.textMid,lineHeight:1.7,maxWidth:480,margin:"0 auto",fontWeight:300}}>
          We're building the go-to destination for boutique fitness discovery in LA. If you're a studio, a wellness brand, or someone who wants to reach our community - we'd love to hear from you.
        </p>
      </div>

      {/* We work with */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:40}}>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 22px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:40,height:40,borderRadius:10,background:BRAND.red,display:"flex",alignItems:"center",justifyContent:"center",color:"#FEEBAB",fontSize:"0.85rem",fontWeight:600,margin:"0 auto 12px"}}>◎</div>
          <div style={{fontSize:"0.95rem",fontWeight:600,marginBottom:4}}>Studios</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>Featured reviews, listings, and promotion to our audience of wellness-minded women in LA.</p>
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:"24px 22px",border:"1px solid rgba(44,37,34,0.05)",textAlign:"center"}}>
          <div style={{width:40,height:40,borderRadius:10,background:BRAND.butter,display:"flex",alignItems:"center",justifyContent:"center",color:BRAND.red,fontSize:"0.85rem",fontWeight:600,margin:"0 auto 12px"}}>✦</div>
          <div style={{fontSize:"0.95rem",fontWeight:600,marginBottom:4}}>Brands</div>
          <p style={{fontSize:"0.82rem",lineHeight:1.6,color:BRAND.textMid,fontWeight:300}}>Content partnerships, event collaborations, and authentic integration with our editorial platform.</p>
        </div>
      </div>

      {/* Contact form */}
      <div style={{background:"#fff",borderRadius:20,padding:"clamp(28px,4vw,40px)",border:"1px solid rgba(44,37,34,0.05)"}}>
        <h2 style={{fontFamily:"'Libre Baskerville',Georgia,serif",fontSize:"1.2rem",fontWeight:400,marginBottom:6}}>get in touch</h2>
        <p style={{fontSize:"0.85rem",color:BRAND.textLight,marginBottom:24,fontWeight:300}}>Tell us a bit about what you're looking for and we'll get back to you.</p>

        {formSent ? (
          <div style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{fontSize:"1.5rem",marginBottom:12}}>✦</div>
            <div style={{fontSize:"1rem",fontWeight:500,marginBottom:6}}>Thanks for reaching out!</div>
            <p style={{fontSize:"0.85rem",color:BRAND.textMid,fontWeight:300}}>We'll be in touch soon.</p>
          </div>
        ) : (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div>
                <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Name</div>
                <input style={iS} placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} />
              </div>
              <div>
                <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Email</div>
                <input style={iS} placeholder="email@example.com" type="email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} />
              </div>
            </div>
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Studio or Brand</div>
              <input style={iS} placeholder="Your studio or brand name" value={formData.company} onChange={e=>setFormData({...formData,company:e.target.value})} />
            </div>
            <div>
              <div style={{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(44,37,34,0.5)",marginBottom:8,fontWeight:500}}>Tell us more</div>
              <textarea style={{...iS,minHeight:100,resize:"vertical",borderRadius:12,lineHeight:1.6}} placeholder="What are you interested in? Any details that would help us understand the opportunity." value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} />
            </div>
            <button onClick={handleSubmit} disabled={sending||!formData.name||!formData.email||!formData.message} style={{background:(formData.name&&formData.email&&formData.message&&!sending)?BRAND.red:"rgba(44,37,34,0.12)",color:(formData.name&&formData.email&&formData.message&&!sending)?"#fff":"rgba(44,37,34,0.3)",border:"none",borderRadius:100,padding:"14px 0",fontSize:"0.9rem",fontWeight:500,cursor:(formData.name&&formData.email&&formData.message&&!sending)?"pointer":"default",fontFamily:"inherit",width:"100%"}}>
              {sending ? "Sending..." : "Send Inquiry"}
            </button>
            <p style={{fontSize:"0.75rem",color:BRAND.textLight,textAlign:"center",fontWeight:300}}>
              Or email us directly at <a href="mailto:bookdwithus@gmail.com" style={{color:BRAND.red,textDecoration:"none"}}>bookdwithus@gmail.com</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
