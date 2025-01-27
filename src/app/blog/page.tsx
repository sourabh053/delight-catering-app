'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Wedding Catering Trends for 2024",
    excerpt: "Discover the latest trends in wedding catering, from interactive food stations to sustainable dining options that will make your special day memorable.",
    image: "https://media.istockphoto.com/id/1463458489/photo/wedding-set-up-dinner-table-reception-a-plate-with-a-green-cloth-towel-knives-and-forks-next.jpg?s=612x612&w=0&k=20&c=BHvkq9uBk4dg23gcffSRmzeXHXlMEdiGHHcYrmHwrIw=",
    category: "Wedding",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Plan a Corporate Event Menu",
    excerpt: "Learn the essential tips for planning a successful corporate event menu that caters to diverse dietary preferences and impresses your clients.",
    image: "https://media.istockphoto.com/id/539440276/photo/working-through-some-details.jpg?s=612x612&w=0&k=20&c=eigBOrURza9_5IWAG3Z-hDEBvx8onSppQmdeDm-thm8=",
    category: "Corporate",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "The Art of Food Presentation",
    excerpt: "Master the basics of food presentation and plating techniques that will elevate your catering service to the next level.",
    image: "https://media.istockphoto.com/id/1040865674/photo/stock-market-report.jpg?s=612x612&w=0&k=20&c=QTt58tCVedSw3_dEipQIG9Xj8vXnhDR_285RNgMvZys=",
    category: "Tips",
    date: "March 5, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Sustainable Catering Practices",
    excerpt: "Explore eco-friendly catering solutions and learn how to reduce food waste while maintaining quality and taste.",
    image: "https://media.istockphoto.com/id/2189495681/photo/green-building-concept.jpg?s=612x612&w=0&k=20&c=tYgukCWgsmGWC_N4DJiLMZcMmXG2iVAZZyIvT0Tw68k=",
    category: "Sustainability",
    date: "March 1, 2024",
    readTime: "4 min read"
  }
]

const categories = [
  "All",
  "Wedding",
  "Corporate",
  "Tips",
  "Sustainability",
  "Events",
  "Recipes"
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = 
        selectedCategory === 'All' || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="pt-24">
      <section className="py-16 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends and insights in catering
            </p>
          </div>

          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${category === selectedCategory
                        ? 'bg-[#EE3124] text-white' 
                        : 'bg-white text-gray-600 hover:bg-[#EE3124] hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#EE3124] text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-[#1A1A1A]">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#EE3124] font-medium hover:gap-3 transition-all gap-2"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts found matching your criteria. Try adjusting your search or filter.
              </p>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates on catering trends and tips delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                />
                <button
                  type="submit"
                  className="bg-[#EE3124] text-white px-6 py-2 rounded-md hover:bg-[#d62b1f] transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 