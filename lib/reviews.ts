export type GuestReview = {
  name?: string
  stay: string
  score: string
  title?: string
  body: string
}

export type ReviewSet = {
  id: "six" | "eight" | "google"
  label: string
  score: string
  scoreLabel: string
  count: number
  reviews: GuestReview[]
}

export const sixBedroomReviews: GuestReview[] = [
  {
    name: "Charles R.",
    stay: "7 nights in Mar 2026",
    score: "10/10",
    body: "Clean Rooms, Great Host, The location was great, and the comfort was great too! The food was excellent and the staff was ideal!!",
  },
  {
    name: "Selena S.",
    stay: "5 nights in Apr 2025",
    score: "10/10",
    title: "Best trip ever!!",
    body: "You will not be disappointed if you stay here!! It was the best vacation we have ever been on. Chef Tony made us the best food for every meal!! Reyes made us drinks to order!! Paz set up transportation and helped us with activities! This house is worth the money you pay!! We will be back!! The rooms are big, the beds are comfortable!! You are right in downtown you can walk to shops and restaurants!!",
  },
  {
    name: "Brooke R.",
    stay: "3 nights in Nov 2022",
    score: "10/10",
    title: "BEST TRIP EVER",
    body: "Everything about this trip/experience was amazing and I could go on for hours but it really is something that you MUST see for yourself! There were 12 total on this trip and not one of us had any complaints! Everyone at the house from our personal chef to the concierge and bartender, to the welcoming crew were just all top notch in the service industry! Our bartender Reyes was fantastic and made sure we never went thirsty! Paz, our concierge, or “house mother” as we warmly referred to her as, was so helpful and set everything up for us including dinner reservations and a private yacht and transportation all over PVR! This house is directly on the beach with a private fenced in pool! There was security for our entire stay which made us feel very safe but at the same time we felt as though we didn’t need it because the part of town this home is located. We were also impressed with the location and amenities available to us during our stay. The town square was in walking distance from our house and we were able to walk from our house all the way until the peninsula that brings you to zona romantica we could have walked further but needed to get home for dinner reservations! Needless to say, We will be going back and we have already planned our trip for next year!",
  },
  {
    name: "Hallie T.",
    stay: "7 nights in Jan 2023",
    score: "10/10",
    title: "Fantastic house, location, staff made for the best vacation ever!",
    body: "Everything about the trip was just perfect. From the very start Mario the homeowner was wonderful and answered every question before I even got on the plane. Arrival was so smooth, we got our bags and were met outside by our driver. When we arrived at the house, the entire staff was there to greet us and then proceeded to make our trip so incredibly comfortable and all around wonderful. The house is super clean and the maids are there every day to change beds etc. The beds and pillows are all very comfortable so we all slept great. The house is located right downtown so we were able to walk or do daily runs around downtown Puerto Vallarta along with shopping and restaurants but by far the best thing was the views of the beautiful ocean and incredible sunsets. Chef Wendy and Tony were so accommodating, professional and gracious while seriously making some of the best meals we have ever had (actually much better than any of the high end restaurants we went to) the variety of foods she offered for breakfast, lunch, dinner and dessert were all delicious. Arath the butler/bartender made the most delicious drinks and was so attentive to our every need. He is also so incredibly sweet! Paz the house manager was so incredibly helpful getting us taxis for wherever we needed to go along with being a wealth of information. To sum it up I would say ABSOLUTE PERFECTION!!!",
  },
  {
    name: "Elliot G.",
    stay: "7 nights in Jun 2022",
    score: "10/10",
    title: "A beautiful property!",
    body: "The overall ambience, the beauty of the property, the service, the staff, the food - all were just perfect and exactly as advertised. An ideal vacation spot!",
  },
  {
    name: "Vlad V.",
    stay: "7 nights in Mar 2022",
    score: "10/10",
    title: "Great times",
    body: "Great staff and location.",
  },
  {
    name: "Nancy D.",
    stay: "6 nights in Jan 2022",
    score: "10/10",
    title: "UNBELIEVABLE!!!",
    body: "Mario's property is AMAZING! The setting is unbelievable as it has its own beautiful pool and outside space AND direct access to the beach. The little kids could play in the sand while we watched them from the poolside. Speaking of little children, we didn't feel like we had to be afraid of them ruining anything. It isn't a \"fancy\" place that one would be afraid to bring young children too. The staff made our trip even more amazing. In addition to the included breakfasts and lunches, we had them also shop for and prepare our dinners, so it was a vacation for all of us! We sat outside at the long table and dined under umbrellas during the day and festival lighting at night. Magical! Wendy and her kitchen staff are so talented and made us some amazing seafood dishes. They were also so accommodating with the toddler's food needs. Paz, the manager was over-the-top helpful with some unforseen and immediate challenges that we had with Covid testing requirements. Arath, the bar-tender, was so attentive and creative with what he served us. All of their attitudes were fabulous and they were eager to serve. The spaces were clean, well supplied, and attractive. Thank you for sharing your home with our large family, Mario!",
  },
  {
    name: "Brandon O.",
    stay: "3 nights in Nov 2021",
    score: "10/10",
    title: "5 stars",
    body: "From the moment we arrived until we left the staff too incredible care of us. Everyone was attentive, kind, helpful and created a great atmosphere to relax and enjoy Mexico. Definitely recommend, you won’t want to leave.",
  },
  {
    name: "Michael M.",
    stay: "9 nights in Apr 2021",
    score: "10/10",
    title: "Incredible",
    body: "Great property and staff",
  },
  {
    name: "Yvette H.",
    stay: "4 nights in Feb 2020",
    score: "8/10",
    title: "Great house staff and food!",
    body: "Our Group of 12 thoroughly enjoyed the house and staff at La Casa playa. Chef Wendy and staff were excellent. The bustling area and beach was a change for our group who normally stay in the quieter Conchas China’s but the access to beach and the city was definitely a plus. We would definitely stay at this house again!",
  },
  {
    name: "Kristopher K.",
    stay: "4 nights in Oct 2019",
    score: "10/10",
    title: "Awesome experience",
    body: "Highly recommend this 5 star property for anyone looking for a first class vacation in Puerto Vallarta. We enjoyed the staff, cooks and concierge.",
  },
  {
    name: "Davis F.",
    stay: "7 nights in Apr 2019",
    score: "10/10",
    title: "Great house!",
    body: "Really an amazing house with everything you need. Amazing staff! Get Wendy to cook all your dinners - she is a brilliant cook.",
  },
  {
    name: "Anne M.",
    stay: "4 nights in Apr 2019",
    score: "10/10",
    title: "Great service, beautiful stay",
    body: "Our group of 11 just had a great stay at Casa de la Playa. The location is amazing, central to everything we needed and of course, right on the beach. The house itself was beautiful and situated well for our group to hang out in common spaces but we all had plenty of privacy - either in our rooms or by finding a nook within the house. The pool was awesome - we had a great time and spent most of our days there, Alejandro was so generous in making sure our glasses were always full and was willing to bend over backwards to make sure we had what we needed. In addition to Alejandro, the rest of the staff was amazing. Wendy's cooking was incredible and she catered to our dietary restrictions without flinching. Inez and team did a great job cleaning up after us, and Paz was always around to make sure things were running smoothly. Even the night watchman was wonderful! Overall, we had a wonderful stay and will happily be back next year!",
  },
  {
    name: "Gary W.",
    stay: "4 nights in Jun 2018",
    score: "10/10",
    title: "Pampered in Paradise!",
    body: "We had an amazing time at Casa La Playa! The house is spectacular and absolutely perfect for large groups. The living area has large sliding doors that allow an “open air” environment. The air conditioning in the bedrooms worked great and the rooms are very spacious with great linens/bedding. We were steps from the beautiful blue ocean and minutes from great restaurants and the malecon. The evening sunsets from the property were breathtaking! But, what made the trip extra special was the staff. We were truly pampered from the second we arrived. Chef Wendy was incredible! She worked so hard to ensure that every meal was fantastic. And, it was so nice to sit outdoors for our meals at the large table that had seating for our party of 14. We even had her stay one evening to prepare a special meal, which was spectacular. We loved Jesus! He worked magic with the blender and served the perfect pineapple margaritas and mojitos! Plus, he was very accommodating to the kids and kept them supplied with their “kid” pina coladas all day. Paz stopped by each day to see what we needed and would arrange excursions, etc for us. We look forward to returning to this property — it was absolutely perfect in every way.",
  },
  {
    name: "Brandi P.",
    stay: "October 2017",
    score: "10/10",
    title: "Incredible Family Vacation",
    body: "Our family of 13 rented Casa La Playa from October 18-22 to celebrate my mother's 80th birthday. The home is spectacular! Beautiful views, 5 minute walk to the Malecon, minutes to numerous eateries, just steps from the waters edge. What made our trip top notch was the staff. We fell in love with Ariel and his skill of making the perfect margarita. He spent time with all members of our family making sure everyone was taken care of and happy. Chef Wendy cooked all of our breakfasts and two dinners. The food was unbelievable. We had one family member with celiac disease, and she worked to create meals or substitutes so that this guest never felt left out. Working with Mario and Paz was a breeze and they were both so helpful. We can't wait to book our trip next fall back to Casa La Playa.",
  },
  {
    name: "patti e.",
    stay: "March 2017",
    score: "10/10",
    title: "Fabulous Beachfront, Walking to Malacon",
    body: "Our family, 12 people ranging in age from 9 years old to 72 years, rented this house in March 2017. The staff is FANTASTIC -- there is a house manager, bartender/attendant, chef + chef assistant, and house keepers who clean each day. There is a security guard each evening who keeps watch over night. They attended to our every request for food/drinks, assisted with reservations for cruises (whale watching, luxury snorkeling, ATV tour) -- there when you need them, but didn't feel like they were hovering. Friendly, helpful -- can't say enough about how good the staff is here at this villa. Bedrooms are large, bathrooms clean and modern. We rented the 6 rooms. Living room on 1st floor is very spacious. We fluctuated between sitting inside and outside. Plenty of lounging chairs by the pool. We ate breakfast and lunch at the table by pool.",
  },
  {
    name: "Chris D.",
    stay: "Archival review",
    score: "10/10",
    title: "AMAZING",
    body: "I held my 30th birthday at Casa La Playa. It was INCREDIBLE. The house is way more gorgeous than that photos show. The staff is beyond helpful and accommodating. Anything I asked of them, they provided. Literally anything. The service was better than 5 star hotels I have stayed at. They anticipated our every move. They would clean as we left, and rearrange furniture for our next gathering. I had never seen anything like it. Drinks were always ready to go and refills were always there. I was so impressed. The house is incredible. I will say, you would think the master is the top floor, but it almost seemed like it was the second floor actually, so check out all the rooms before you make your final decision. I highly recommend Casa La Playa. Thank you Mario for making our experience incredible. Chris",
  },
  {
    name: "Karen C.",
    stay: "Archival review",
    score: "10/10",
    title: "Gorgeous villa on the beach in Puerto Vallarta",
    body: "My family, 15 people ranging in age from 11 to 82, just returned from a wonderful vacation at Casa La Playa in Puerto Vallarta Mexico. This house is huge (includes an elevator!), modern, clean and just beautiful! It includes a pool and hot tub, flat screen TVs in each room and is fully air conditioned. There is available free wifi (spotty at times) and vans are available (for an added fee) if you want to take an excursion. It is walking distance from many restaurants and shops and right on the beach! The staff was incredible! Anjel (or is it Angel?) our chef, prepared authentic Mexican dishes with the help of Gris. Victor, the bartender, brought us Margaritas and piña coladas at the pool. The house keepers kept the rooms neat and clean, the night security opened the door when we came home after dark and Paz, the house manager (who spoke perfect English), was always available in person or by phone. I would highly recommend this villa to any large group of people who would to live \"the lifestyles of the rich and famous\" for a little while. Just Amazing!",
  },
  {
    name: "Michael H.",
    stay: "Archival review",
    score: "10/10",
    title: "An unforgettable experience!!",
    body: "Personally this location is perfect! Its just far enough away from town that you can walk and be close to the action, but also no need to leave the house. The House is impeccable!!! Clean, pool, beach side not sure how much better you can get. NOW THE STAFF !!! Can you say I didn't lift a finger all weekend. Isn't that they way it should be :) Highly recommended.",
  },
  {
    name: "Lauren R.",
    stay: "Archival review",
    score: "10/10",
    title: "AMAZING Spring Break Location!",
    body: "What an amazing trip!! Not only was the house itself spectacular, but the staff makes sure to go above and be on so that you are taken care of and having a blast. The house is located the perfect distance from town, so that you can still walk to restaurants and night life but you still feel removed enough that it's relaxing and enjoyable! The house is staff is perfect for anyone, from a group of college kids looking for a fun spring break or a family wanting a relaxing, stress free vacation!",
  },
]

export const eightBedroomReviews: GuestReview[] = [
  {
    name: "Danny P.",
    stay: "2 nights in Oct 2025",
    score: "10/10",
    body: "The service was Amazing!! Paz did an outstanding job in setting us up with excursions and services prior and during our stay. The food was fantastic!! Wendy and Tony cooked awesome food. Very tasty and service off the charts. Housekeeping, bartender, and night watchmen all were friendly and accommodating. The house is massive and very nice! Would come back with friends, with couples, or with families. Great location and felt very safe the whole time even when walking around.",
  },
  {
    name: "Sam K.",
    stay: "7 nights in Dec 2024",
    score: "10/10",
    title: "Spectacular home and friendly and expert service",
    body: "What a spectacular week we spent at Casa la Playa! The accommodations, the staff and the meals were all fantastic. Our family has rented many vacation homes—none as wonderful as this. On this trip we were 14 adults, a teenager and three younger children. From the excellent communication with Mario, who booked our stay, to Paz, the house manager, who answered all of our questions, arranged transportation and everything else we needed, to Reyes, our delightful bartender, jet ski scheduler, kids’ smoothie guru and all-around terrific guy—our visit was made enjoyable by their attentive service and positive attitudes. Three delicious meals a day were expertly prepared from scratch by Lydia and Tony, who nourished us through the week. The heated pool and jacuzzi and enough comfortable lounge chairs and fresh towels made our poolside and beach time relaxing and pleasant. The website description of the contemporary home is accurate. Its close proximity to the mile-long Malecón and the Centro and Zona Romántica was quite convenient. And the ample grounds offered space for other activities and games. We highly recommend this property.",
  },
  {
    name: "Ariel K.",
    stay: "7 nights in Apr 2023",
    score: "10/10",
    title: "Great stay in Puerto Vallarta!",
    body: "We had a fantastic stay in this beautiful home in Puerto Vallarta. The staff were incredible (shout out to Arath, Paz, and chef Wendy)! Location is extremely convenient, home amenities superb, and communication with owner easy and immediate. Highly recommend.",
  },
  {
    name: "Doug G.",
    stay: "4 nights in Feb 2023",
    score: "10/10",
    title: "Fantastic Property",
    body: "This house is awesome for large groups. The location as incredible. The beach in front of the house is really fun, water is great and swimmable, and you are a 5-10 min walk to the center of town. The staff is great (especially Reyes the barman, and Chef Wendy and her team. Some of the rooms are slightly unusual. The pool deck, with the hot tub, right on the beach is just amazing.",
  },
  {
    name: "Justin D.",
    stay: "3 nights in Jan 2020",
    score: "10/10",
    title: "INCREDIBLE HOME!",
    body: "This home is awesome. The layout is a bit chopped up and weird, but all the bedrooms are great, there are a couple of large common areas, large dining areas (inside & out) and the pool area is awesome. Chef Wendy is AMAZING! All the staff is wonderful. Only knock on this home is it's the nicest one on the block so you get a few \"looky Lou's\" walking along the beach gawking at the house a bit. The beach isn't good for surfing, but you don't want to spend much time on the beach anyway because the home is so great.",
  },
  {
    name: "Barbara R.",
    stay: "7 nights in Dec 2019",
    score: "10/10",
    title: "Couldn’t be better",
    body: "The most luxurious house with a great staff. Didn’t want to leave the property. Had their chef and couldn’t have eaten better anywhere.",
  },
]

export const googleReviews: GuestReview[] = [
  {
    name: "Alma Martinez",
    stay: "2025",
    score: "5/5",
    body: "It's a cozy place with an excellent view of the beach...with a small pool it's a very comfortable place.",
  },
  {
    name: "Len Oppenheimer",
    stay: "2023",
    score: "5/5",
    body: "Sweet!",
  },
  {
    name: "Hugo Rizo",
    stay: "2023",
    score: "5/5",
    body: "The best from pv mexico",
  },
  {
    name: "Eliza Parker",
    stay: "2021",
    score: "5/5",
    body: "We just returned from hosting a 5 Day party for my 45th birthday here. We were a group of 14 and a great deal of planning went into making this party happen. From flowers, to food, to Covid testing, Paz the house manager took care of it all. She was my own personal assistant and party planner and none of it could have happened with out her. This house was amazing and the pictures do not do it justice. Big, beautiful, on the beach, gorgeous sunsets, and a full staff. I mean, cook, housekeeper, maid, night guard and bartender. They were all great. The housekeeper and the maid were so sweet and kind. The staff even got me a surprise massage for my birthday. It was amazingly kind. Do not hesitate to stay at the villa, it was out of this world. Chef Wendy was out of this world with her cooking and Arath our bartender was on point with the drinks flowing all day. Don not hesitate...book it.",
  },
  {
    name: "Melina Amanat",
    stay: "2021",
    score: "5/5",
    body: "OMG! From beginning to End this place was so magical. The staff was unbelievable. They are the kindest, Sweeter and most accommodating people ever. The chef Wendy, what can I say! Give this woman her own restaurant. She literally nailed every single meal and on top of it, she was so catering to dietary needs. The house is super clean and has everything you need. We were a large group of 13 and everyone of us felt so taken care of. I’m so grateful for this experience. The owner was very nice and made sure we were taken care of.",
  },
  {
    name: "Sydney Denny",
    stay: "2021",
    score: "5/5",
    body: "The house is beautiful, and location is perfect, but the best part was the staff. They were amazing, and made the vacation so relaxing!",
  },
  {
    name: "Karen Oliver",
    stay: "2021",
    score: "5/5",
    body: "This place took my breath away, between the views and the living space, it was an experience I'll never forget. The friendliest staff EVER! They get to know you if in small groups, and really know how to make it personal. After this unforgettable stay we hope to make it an annual adventure!",
  },
  {
    name: "Jaime Cox",
    stay: "2020",
    score: "5/5",
    body: "First of all, top notch staff. Second, the food from chef Wendy was restaurant quality. Walking distance to the pier and boardwalk, safe area, and house itself is spectacularly maintained. Highly recommended! Pool right on the beach and gates for safety at night were appreicated touches.",
  },
  {
    name: "Stacey Higgins",
    stay: "2019",
    score: "5/5",
    body: "What a great house!! We booked at the last minute and were so happy to stay at Casa la Playa. The staff were great, and made our trip so relaxing. Location is perfect for a walk into town or a taxi to catch a boat ride....but you really never have to leave. The cook, Wendy, was fantastic. Can’t say enough great things about this house, our 3 families from Seattle had a great trip.",
  },
]

export const reviewSets: ReviewSet[] = [
  {
    id: "six",
    label: "6 bedrooms",
    score: "10/10",
    scoreLabel: "Exceptional",
    count: 26,
    reviews: sixBedroomReviews,
  },
  {
    id: "eight",
    label: "8 bedrooms",
    score: "10/10",
    scoreLabel: "Exceptional",
    count: 7,
    reviews: eightBedroomReviews,
  },
  {
    id: "google",
    label: "Google",
    score: "4.8",
    scoreLabel: "stars",
    count: 14,
    reviews: googleReviews,
  },
]

export const reviewSheets = [
  {
    id: "six" as const,
    title: "6-Bedroom Reviews",
    blurb: "10/10 Exceptional · 26 guest reviews",
    image: "/reviews/casa-la-playa-6-bedroom-reviews.jpg",
    width: 1200,
    height: 7206,
    alt: "Guest reviews for the 6-bedroom rental of Casa La Playa Puerto Vallarta, rated 10 out of 10",
  },
  {
    id: "eight" as const,
    title: "8-Bedroom Reviews",
    blurb: "10/10 Exceptional · 7 guest reviews",
    image: "/reviews/casa-la-playa-8-bedroom-reviews.jpg",
    width: 1200,
    height: 2209,
    alt: "Guest reviews for the 8-bedroom rental of Casa La Playa Puerto Vallarta, rated 10 out of 10",
  },
  {
    id: "google" as const,
    title: "Google Reviews",
    blurb: "4.8 stars · 14 Google reviews",
    image: "/reviews/casa-la-playa-google-reviews.jpg",
    width: 1200,
    height: 900,
    alt: "Casa La Playa Puerto Vallarta rated 4.8 stars on Google",
  },
]
