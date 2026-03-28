export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Nuroh Cafe',
    description: 'Specialty coffee cafe in Jaipur offering artisanal coffee, brunch, fast WiFi, and community events.',
    url: 'https://nuroh.in',
    telephone: '+919214444360',
    email: 'connect@nuroh.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Ashok Marg, Patel Colony, C Scheme',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302001',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.9124, longitude: 75.7873 },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '10:00',
      closes: '23:00',
    },
    servesCuisine: ['Arabian', 'Italian', 'Mediterranean'],
    priceRange: '₹₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5' },
    image: 'https://nuroh.in/assets/logo/nuroh-logo-cream.png',
  };
}

export function blogPostingSchema(post: { title: string; slug: string; excerpt: string; date: string; author: string; image: string; }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://blog.nuroh.in/blog/${post.slug}/`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Nuroh Cafe',
      url: 'https://nuroh.in',
      logo: { '@type': 'ImageObject', url: 'https://nuroh.in/assets/logo/nuroh-logo-cream.png' },
    },
    image: post.image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://blog.nuroh.in/blog/${post.slug}/` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
