export interface SEOKeyword {
  keyword: string;
  searchVolume: 'low' | 'medium' | 'high';
  difficulty: 'low' | 'medium' | 'high';
  intent: 'informational' | 'navigational' | 'transactional';
  category: 'primary' | 'secondary' | 'long-tail' | 'brand' | 'trending';
  suggestedBlogTitle: string;
}

export const seoKeywords: SEOKeyword[] = [
  // PRIMARY (8)
  { keyword: 'best cafe in jaipur', searchVolume: 'high', difficulty: 'high', intent: 'informational', category: 'primary', suggestedBlogTitle: 'Best Cafes in Jaipur 2026: A Complete Guide for Cafe Lovers' },
  { keyword: 'nuroh cafe jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'navigational', category: 'primary', suggestedBlogTitle: 'Nuroh Cafe Jaipur: Everything You Need to Know Before Visiting' },
  { keyword: 'coffee shop jaipur', searchVolume: 'high', difficulty: 'medium', intent: 'informational', category: 'primary', suggestedBlogTitle: 'Top Coffee Shops in Jaipur: Where to Get Your Perfect Cup' },
  { keyword: 'cafe near me jaipur', searchVolume: 'high', difficulty: 'medium', intent: 'transactional', category: 'primary', suggestedBlogTitle: 'Find the Best Cafe Near You in Jaipur: Area-Wise Guide' },
  { keyword: 'specialty coffee jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'informational', category: 'primary', suggestedBlogTitle: 'Specialty Coffee in Jaipur: Where to Find the Best Brews' },
  { keyword: 'brunch in jaipur', searchVolume: 'medium', difficulty: 'medium', intent: 'transactional', category: 'primary', suggestedBlogTitle: 'Best Brunch Spots in Jaipur: Weekend Edition' },
  { keyword: 'cafe with wifi jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'transactional', category: 'primary', suggestedBlogTitle: 'Cafes with Fast WiFi in Jaipur for Working Professionals' },
  { keyword: 'work from cafe jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'informational', category: 'primary', suggestedBlogTitle: 'Best Work From Cafe Spots in Jaipur for Digital Nomads' },

  // SECONDARY (12)
  { keyword: 'instagrammable cafe jaipur', searchVolume: 'medium', difficulty: 'medium', intent: 'informational', category: 'secondary', suggestedBlogTitle: 'Most Instagrammable Cafes in Jaipur: Photo Guide 2026' },
  { keyword: 'quiet cafe jaipur', searchVolume: 'low', difficulty: 'low', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Quiet Cafes in Jaipur for Reading, Thinking, and Escaping Noise' },
  { keyword: 'study cafe jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Best Study Cafes in Jaipur Where Students Get Work Done' },
  { keyword: 'best coffee jaipur', searchVolume: 'high', difficulty: 'medium', intent: 'informational', category: 'secondary', suggestedBlogTitle: 'Where to Find the Best Coffee in Jaipur: A Barista Guide' },
  { keyword: 'cafe for couples jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Romantic Cafes in Jaipur: Perfect Date Spots for Couples' },
  { keyword: 'rooftop cafe jaipur', searchVolume: 'high', difficulty: 'medium', intent: 'informational', category: 'secondary', suggestedBlogTitle: 'Best Rooftop Cafes in Jaipur with Stunning Views' },
  { keyword: 'aesthetic cafe jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'informational', category: 'secondary', suggestedBlogTitle: 'Aesthetic Cafes in Jaipur That Look Straight Out of Pinterest' },
  { keyword: 'pet friendly cafe jaipur', searchVolume: 'low', difficulty: 'low', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Pet-Friendly Cafes in Jaipur: Where to Bring Your Furry Friend' },
  { keyword: 'book cafe jaipur', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'secondary', suggestedBlogTitle: 'Book Cafes in Jaipur: Read, Sip, Repeat' },
  { keyword: 'cafe with good food jaipur', searchVolume: 'medium', difficulty: 'medium', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Cafes in Jaipur with Actually Great Food (Not Just Coffee)' },
  { keyword: 'breakfast cafe jaipur', searchVolume: 'medium', difficulty: 'medium', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Best Breakfast Cafes in Jaipur: Morning Fuel Guide' },
  { keyword: 'late night cafe jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'transactional', category: 'secondary', suggestedBlogTitle: 'Late Night Cafes in Jaipur That Stay Open Past 10 PM' },

  // LONG-TAIL (10)
  { keyword: 'best cafe to work from in jaipur', searchVolume: 'low', difficulty: 'low', intent: 'transactional', category: 'long-tail', suggestedBlogTitle: 'The Best Cafe to Work From in Jaipur: Tried and Tested' },
  { keyword: 'where to have brunch in jaipur', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Where to Have Brunch in Jaipur This Weekend' },
  { keyword: 'specialty coffee shops in jaipur rajasthan', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Specialty Coffee Shops in Jaipur, Rajasthan: The Complete List' },
  { keyword: 'things to do in jaipur at a cafe', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Things to Do at a Cafe in Jaipur: Beyond Just Coffee' },
  { keyword: 'jaipur cafe with fast internet', searchVolume: 'low', difficulty: 'low', intent: 'transactional', category: 'long-tail', suggestedBlogTitle: 'Jaipur Cafes with Fast Internet: Speed-Tested for You' },
  { keyword: 'best cold brew coffee in jaipur', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Best Cold Brew Coffee in Jaipur: Where to Find It' },
  { keyword: 'instagrammable places in jaipur cafe', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Instagrammable Cafe Spots in Jaipur for the Perfect Shot' },
  { keyword: 'cafe for freelancers in jaipur', searchVolume: 'low', difficulty: 'low', intent: 'transactional', category: 'long-tail', suggestedBlogTitle: 'Freelancer-Friendly Cafes in Jaipur with Power and WiFi' },
  { keyword: 'nuroh cafe menu and prices jaipur', searchVolume: 'low', difficulty: 'low', intent: 'navigational', category: 'long-tail', suggestedBlogTitle: 'Nuroh Cafe Menu and Prices: Complete Guide 2026' },
  { keyword: 'weekend brunch spots jaipur 2026', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'long-tail', suggestedBlogTitle: 'Weekend Brunch Spots in Jaipur 2026: Updated List' },

  // BRAND (8)
  { keyword: 'nuroh cafe', searchVolume: 'medium', difficulty: 'low', intent: 'navigational', category: 'brand', suggestedBlogTitle: 'Nuroh Cafe: Jaipur\'s Favorite Coffee and Community Space' },
  { keyword: 'nuroh jaipur', searchVolume: 'medium', difficulty: 'low', intent: 'navigational', category: 'brand', suggestedBlogTitle: 'Why Nuroh Jaipur is the Talk of the Town' },
  { keyword: 'nuroh cafe menu', searchVolume: 'low', difficulty: 'low', intent: 'navigational', category: 'brand', suggestedBlogTitle: 'Nuroh Cafe Menu: What to Order and What\'s New' },
  { keyword: 'nuroh cafe address', searchVolume: 'low', difficulty: 'low', intent: 'navigational', category: 'brand', suggestedBlogTitle: 'How to Reach Nuroh Cafe: Address, Directions, Parking' },
  { keyword: 'nuroh cafe timings', searchVolume: 'low', difficulty: 'low', intent: 'navigational', category: 'brand', suggestedBlogTitle: 'Nuroh Cafe Timings: Best Time to Visit' },
  { keyword: 'nuroh cafe reviews', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'brand', suggestedBlogTitle: 'Nuroh Cafe Reviews: What Guests Are Saying' },
  { keyword: 'nuroh specialty coffee', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'brand', suggestedBlogTitle: 'Nuroh Specialty Coffee: Behind Every Cup' },
  { keyword: 'nuroh cafe events', searchVolume: 'low', difficulty: 'low', intent: 'informational', category: 'brand', suggestedBlogTitle: 'Events at Nuroh Cafe: What\'s Happening This Month' },

  // TRENDING (2)
  { keyword: 'new cafes in jaipur 2026', searchVolume: 'medium', difficulty: 'low', intent: 'informational', category: 'trending', suggestedBlogTitle: 'New Cafes in Jaipur 2026: Fresh Openings You Should Visit' },
  { keyword: 'best cafes jaipur rajasthan 2026', searchVolume: 'medium', difficulty: 'medium', intent: 'informational', category: 'trending', suggestedBlogTitle: 'Best Cafes in Jaipur, Rajasthan 2026: The Definitive List' },
];
