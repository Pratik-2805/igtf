// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { Search, LogOut, Filter, Plus, Edit, Trash2, X, Calendar, MapPin, Menu } from "lucide-react"

// interface Registration {
//   id: number
//   companyName: string
//   contactPerson: string
//   designation: string
//   email: string
//   contactNumber: string
//   product: string
//   address: string
//   companyLogo: string // Added company logo field
//   status: "pending" | "contacted" | "paid" | "rejected"
//   createdAt: string
// }

// interface Event {
//   id: number
//   title: string
//   location: string
//   startDate: string
//   endDate: string
//   time: string
//   exhibitors: number
//   buyers: number
//   countries: number
//   sectors: number
//   description: string
//   isPast: boolean
// }

// interface Category {
//   id: number
//   name: string
//   description: string
//   icon: string
// }

// interface GalleryImage {
//   id: number
//   title: string
//   imageUrl: string
//   description: string
//   type: "carousel" | "banner" | "gallery" | "exhibitor" // Added type field for image categorization
//   displayOrder?: number // Added display order for sorting
// }

// // Added Admin interface
// interface Admin {
//   id: number
//   username: string
//   email: string
//   role: "main" | "regular"
//   createdAt: string
//   lastLogin: string
// }

// export default function AdminDashboard() {
//   const router = useRouter()
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [currentAdminRole, setCurrentAdminRole] = useState<"main" | "regular">("regular")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterStatus, setFilterStatus] = useState<string>("all")
//   const [activeTab, setActiveTab] = useState<"registrations" | "events" | "categories" | "gallery" | "admins">(
//     "registrations",
//   )
//   const [showModal, setShowModal] = useState(false)
//   const [editingItem, setEditingItem] = useState<any>(null)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [galleryFilter, setGalleryFilter] = useState<"all" | "carousel" | "banner" | "gallery" | "exhibitor">("all")

//   // Sample data - replace with your actual database
//   const [registrations, setRegistrations] = useState<Registration[]>([
//     {
//       id: 1,
//       companyName: "Tech Solutions India Pvt Ltd",
//       contactPerson: "Rajesh Kumar",
//       designation: "Marketing Director",
//       email: "rajesh@techsolutions.com",
//       contactNumber: "+91 98765 43210",
//       product: "Electronics & Components",
//       address: "123 Tech Park, Bangalore, Karnataka 560001",
//       companyLogo: "/placeholder.svg?height=100&width=100&text=Tech+Solutions", // Added company logo field
//       status: "paid",
//       createdAt: "2024-12-10",
//     },
//     {
//       id: 2,
//       companyName: "Global Exports Co",
//       contactPerson: "Priya Sharma",
//       designation: "CEO",
//       email: "priya@globalexports.com",
//       contactNumber: "+91 87654 32109",
//       product: "Toys",
//       address: "456 Export House, Mumbai, Maharashtra 400001",
//       companyLogo: "/placeholder.svg?height=100&width=100&text=Global+Exports", // Added company logo field
//       status: "contacted",
//       createdAt: "2024-12-11",
//     },
//     {
//       id: 3,
//       companyName: "Innovative Hardware Ltd",
//       contactPerson: "Amit Patel",
//       designation: "Sales Manager",
//       email: "amit@innovative.com",
//       contactNumber: "+91 76543 21098",
//       product: "Hardware & Tools",
//       address: "789 Industrial Area, Ahmedabad, Gujarat 380001",
//       companyLogo: "/placeholder.svg?height=100&width=100&text=Innovative+Hardware", // Added company logo field
//       status: "rejected",
//       createdAt: "2024-12-09",
//     },
//     {
//       id: 4,
//       companyName: "Prime Construction Materials",
//       contactPerson: "Suresh Reddy",
//       designation: "Business Development Head",
//       email: "suresh@primeconstruction.com",
//       contactNumber: "+91 65432 10987",
//       product: "Construction Material",
//       address: "321 Builder's Plaza, Hyderabad, Telangana 500001",
//       companyLogo: "/placeholder.svg?height=100&width=100&text=Prime+Construction", // Added company logo field
//       status: "pending",
//       createdAt: "2024-12-12",
//     },
//   ])

//   const [events, setEvents] = useState<Event[]>([
//     {
//       id: 1,
//       title: "IGTF Mumbai 2025",
//       location: "Bombay Exhibitions Center, Mumbai, India",
//       startDate: "2025-12-12",
//       endDate: "2025-12-14",
//       time: "10:00 AM - 7:00 PM",
//       exhibitors: 400,
//       buyers: 6000,
//       countries: 40,
//       sectors: 16,
//       description: "The premier B2B trade fair in Mumbai",
//       isPast: false,
//     },
//     {
//       id: 2,
//       title: "IGTF Dubai 2025",
//       location: "Dubai Exhibition Center, Dubai, UAE",
//       startDate: "2025-02-15",
//       endDate: "2025-02-17",
//       time: "10:00 AM - 7:00 PM",
//       exhibitors: 400,
//       buyers: 6000,
//       countries: 40,
//       sectors: 16,
//       description: "International trade fair connecting Middle East and India",
//       isPast: false,
//     },
//   ])

//   const [categories, setCategories] = useState<Category[]>([
//     { id: 1, name: "Hardware & Tools", description: "Industrial and commercial hardware", icon: "🔧" },
//     { id: 2, name: "Toys", description: "Educational and entertainment toys", icon: "🧸" },
//     { id: 3, name: "Electronics & Components", description: "Electronic devices and components", icon: "💻" },
//   ])

//   const [gallery, setGallery] = useState<GalleryImage[]>([
//     {
//       id: 1,
//       title: "Exhibition Hall 2024",
//       imageUrl: "/exhibition-hall.png",
//       description: "Main exhibition hall with exhibitors",
//       type: "gallery", // Default type
//       displayOrder: 1, // Default display order
//     },
//     {
//       id: 2,
//       title: "IGTF Welcome Banner",
//       imageUrl: "/igtf-banner.webp",
//       description: "Welcome banner for the IGTF event",
//       type: "banner", // Default type
//       displayOrder: 1, // Default display order
//     },
//     {
//       id: 3,
//       title: "Keynote Speaker",
//       imageUrl: "/keynote-speaker.webp",
//       description: "Image of the keynote speaker on stage",
//       type: "gallery", // Default type
//       displayOrder: 2, // Default display order
//     },
//     {
//       id: 4,
//       title: "Rotating Carousel Image 1",
//       imageUrl: "/carousel-1.webp",
//       description: "First image in the homepage carousel",
//       type: "carousel", // Default type
//       displayOrder: 1, // Default display order
//     },
//   ])

//   const [admins, setAdmins] = useState<Admin[]>([
//     {
//       id: 1,
//       username: "admin",
//       email: "admin@igtf.com",
//       role: "main",
//       createdAt: "2024-01-01",
//       lastLogin: "2024-12-15",
//     },
//     {
//       id: 2,
//       username: "manager1",
//       email: "manager1@igtf.com",
//       role: "regular",
//       createdAt: "2024-06-15",
//       lastLogin: "2024-12-14",
//     },
//   ])

//   useEffect(() => {
//     // Check authentication
//     const isLoggedIn = localStorage.getItem("isAdminLoggedIn")
//     // Get admin username from local storage
//     const adminUsername = localStorage.getItem("adminUsername")

//     if (isLoggedIn === "true") {
//       setIsAuthenticated(true)
//       if (adminUsername === "admin") {
//         setCurrentAdminRole("main")
//       }
//     } else {
//       router.push("/admin/login")
//     }
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem("isAdminLoggedIn")
//     // Remove admin username on logout
//     localStorage.removeItem("adminUsername")
//     router.push("/")
//   }

//   const handleStatusChange = (id: number, newStatus: Registration["status"]) => {
//     setRegistrations((prev) => prev.map((reg) => (reg.id === id ? { ...reg, status: newStatus } : reg)))
//   }

//   const handleAddEvent = (formData: any) => {
//     const newEvent: Event = {
//       id: events.length + 1,
//       ...formData,
//       exhibitors: Number.parseInt(formData.exhibitors),
//       buyers: Number.parseInt(formData.buyers),
//       countries: Number.parseInt(formData.countries),
//       sectors: Number.parseInt(formData.sectors),
//     }
//     setEvents([...events, newEvent])
//     setShowModal(false)
//   }

//   const handleEditEvent = (formData: any) => {
//     setEvents(
//       events.map((event) =>
//         event.id === editingItem.id
//           ? {
//             ...formData,
//             id: event.id,
//             exhibitors: Number.parseInt(formData.exhibitors),
//             buyers: Number.parseInt(formData.buyers),
//             countries: Number.parseInt(formData.countries),
//             sectors: Number.parseInt(formData.sectors),
//           }
//           : event,
//       ),
//     )
//     setShowModal(false)
//     setEditingItem(null)
//   }

//   const handleDeleteEvent = (id: number) => {
//     if (confirm("Are you sure you want to delete this event?")) {
//       setEvents(events.filter((event) => event.id !== id))
//     }
//   }

//   const handleAddCategory = (formData: any) => {
//     const newCategory: Category = {
//       id: categories.length + 1,
//       ...formData,
//     }
//     setCategories([...categories, newCategory])
//     setShowModal(false)
//   }

//   const handleEditCategory = (formData: any) => {
//     setCategories(categories.map((cat) => (cat.id === editingItem.id ? { ...formData, id: cat.id } : cat)))
//     setShowModal(false)
//     setEditingItem(null)
//   }

//   const handleDeleteCategory = (id: number) => {
//     if (confirm("Are you sure you want to delete this category?")) {
//       setCategories(categories.filter((cat) => cat.id !== id))
//     }
//   }

//   const handleAddGalleryImage = (formData: any) => {
//     const newImage: GalleryImage = {
//       id: gallery.length + 1,
//       ...formData,
//       displayOrder: Number.parseInt(formData.displayOrder) || gallery.length + 1, // Added display order
//     }
//     setGallery([...gallery, newImage])
//     setShowModal(false)
//   }

//   const handleEditGalleryImage = (formData: any) => {
//     setGallery(
//       gallery.map((img) =>
//         img.id === editingItem.id
//           ? {
//             ...formData,
//             id: img.id,
//             displayOrder: Number.parseInt(formData.displayOrder) || img.displayOrder, // Updated display order
//           }
//           : img,
//       ),
//     )
//     setShowModal(false)
//     setEditingItem(null)
//   }

//   const handleDeleteGalleryImage = (id: number) => {
//     if (confirm("Are you sure you want to delete this image?")) {
//       setGallery(gallery.filter((img) => img.id !== id))
//     }
//   }

//   const handleAddAdmin = (formData: any) => {
//     const newAdmin: Admin = {
//       id: admins.length + 1,
//       username: formData.username,
//       email: formData.email,
//       role: formData.role,
//       createdAt: new Date().toISOString().split("T")[0],
//       lastLogin: "Never",
//     }
//     setAdmins([...admins, newAdmin])
//     setShowModal(false)
//   }

//   const handleEditAdmin = (formData: any) => {
//     setAdmins(
//       admins.map((admin) =>
//         admin.id === editingItem.id
//           ? { ...admin, username: formData.username, email: formData.email, role: formData.role }
//           : admin,
//       ),
//     )
//     setShowModal(false)
//     setEditingItem(null)
//   }

//   const handleDeleteAdmin = (id: number) => {
//     if (confirm("Are you sure you want to delete this admin?")) {
//       setAdmins(admins.filter((admin) => admin.id !== id))
//     }
//   }

//   const getStatusColor = (status: Registration["status"]) => {
//     switch (status) {
//       case "paid":
//         return "bg-green-500/10 border-green-500 text-green-700"
//       case "contacted":
//         return "bg-blue-500/10 border-blue-500 text-blue-700"
//       case "rejected":
//         return "bg-red-500/10 border-red-500 text-red-700"
//       case "pending":
//         return "bg-yellow-500/10 border-yellow-500 text-yellow-700"
//       default:
//         return "bg-muted border-border"
//     }
//   }

//   const getStatusBadgeColor = (status: Registration["status"]) => {
//     switch (status) {
//       case "paid":
//         return "bg-green-500 text-white"
//       case "contacted":
//         return "bg-blue-500 text-white"
//       case "rejected":
//         return "bg-red-500 text-white"
//       case "pending":
//         return "bg-yellow-500 text-white"
//       default:
//         return "bg-muted text-foreground"
//     }
//   }

//   const filteredRegistrations = registrations.filter((reg) => {
//     const matchesSearch =
//       reg.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       reg.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       reg.product.toLowerCase().includes(searchQuery.toLowerCase())

//     const matchesFilter = filterStatus === "all" || reg.status === filterStatus

//     return matchesSearch && matchesFilter
//   })

//   const stats = {
//     total: registrations.length,
//     paid: registrations.filter((r) => r.status === "paid").length,
//     contacted: registrations.filter((r) => r.status === "contacted").length,
//     pending: registrations.filter((r) => r.status === "pending").length,
//     rejected: registrations.filter((r) => r.status === "rejected").length,
//   }

//   if (!isAuthenticated) {
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Indo-Global-Trade-Fair-Logo--eqw9QSs9yPlSNoi4uIQ58jPR2grztu.webp"
//                 alt="IGTF Logo" className="h-10 sm:h-12 w-auto" />
//               <div className="sm:hidden">
//                 <h1 className="font-serif text-sm leading-tight">Indo Global Trade Fair</h1>
//                 <p className="text-xs opacity-90">Admin Panel</p>
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="font-serif text-base sm:text-lg lg:text-xl leading-tight">Indo Global Trade Fair</h1>
//                 <p className="text-xs sm:text-sm opacity-90">Admin Panel</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* Logout Button - Desktop */}
//               <button
//                 onClick={handleLogout}
//                 className="hidden sm:flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-md hover:opacity-90 transition-all duration-500 font-medium text-sm"
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span className="hidden md:inline">Logout</span>
//               </button>

//               {/* Logout Icon - Mobile */}
//               <button
//                 onClick={handleLogout}
//                 className="sm:hidden p-2 bg-primary-foreground text-primary rounded-md hover:opacity-90 transition-all duration-500"
//                 aria-label="Logout"
//               >
//                 <LogOut className="w-5 h-5" />
//               </button>

//               {/* Hamburger Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Navigation Tabs */}
//         <div className="border-t border-primary-foreground/20 hidden lg:block">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex gap-1">
//               <button
//                 onClick={() => setActiveTab("registrations")}
//                 className={`px-6 py-3 font-medium transition-colors ${activeTab === "registrations"
//                   ? "bg-primary-foreground text-primary border-b-2 border-primary"
//                   : "text-primary-foreground/70 hover:text-primary-foreground"
//                   }`}
//               >
//                 Registrations
//               </button>
//               <button
//                 onClick={() => setActiveTab("events")}
//                 className={`px-6 py-3 font-medium transition-colors ${activeTab === "events"
//                   ? "bg-primary-foreground text-primary border-b-2 border-primary"
//                   : "text-primary-foreground/70 hover:text-primary-foreground"
//                   }`}
//               >
//                 Events
//               </button>
//               <button
//                 onClick={() => setActiveTab("categories")}
//                 className={`px-6 py-3 font-medium transition-colors ${activeTab === "categories"
//                   ? "bg-primary-foreground text-primary border-b-2 border-primary"
//                   : "text-primary-foreground/70 hover:text-primary-foreground"
//                   }`}
//               >
//                 Categories
//               </button>
//               <button
//                 onClick={() => setActiveTab("gallery")}
//                 className={`px-6 py-3 font-medium transition-colors ${activeTab === "gallery"
//                   ? "bg-primary-foreground text-primary border-b-2 border-primary"
//                   : "text-primary-foreground/70 hover:text-primary-foreground"
//                   }`}
//               >
//                 Gallery & Images
//               </button>
//               {currentAdminRole === "main" && (
//                 <button
//                   onClick={() => setActiveTab("admins")}
//                   className={`px-6 py-3 font-medium transition-colors ${activeTab === "admins"
//                     ? "bg-primary-foreground text-primary border-b-2 border-primary"
//                     : "text-primary-foreground/70 hover:text-primary-foreground"
//                     }`}
//                 >
//                   Admin Management
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden border-t border-primary-foreground/20 bg-primary">
//             <div className="px-4 py-2 space-y-1">
//               <button
//                 onClick={() => {
//                   setActiveTab("registrations")
//                   setIsMobileMenuOpen(false)
//                 }}
//                 className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "registrations"
//                   ? "bg-primary-foreground text-primary"
//                   : "text-primary-foreground/90 hover:bg-primary-foreground/10"
//                   }`}
//               >
//                 Registrations
//               </button>
//               <button
//                 onClick={() => {
//                   setActiveTab("events")
//                   setIsMobileMenuOpen(false)
//                 }}
//                 className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "events"
//                   ? "bg-primary-foreground text-primary"
//                   : "text-primary-foreground/90 hover:bg-primary-foreground/10"
//                   }`}
//               >
//                 Events
//               </button>
//               <button
//                 onClick={() => {
//                   setActiveTab("categories")
//                   setIsMobileMenuOpen(false)
//                 }}
//                 className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "categories"
//                   ? "bg-primary-foreground text-primary"
//                   : "text-primary-foreground/90 hover:bg-primary-foreground/10"
//                   }`}
//               >
//                 Categories
//               </button>
//               <button
//                 onClick={() => {
//                   setActiveTab("gallery")
//                   setIsMobileMenuOpen(false)
//                 }}
//                 className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "gallery"
//                   ? "bg-primary-foreground text-primary"
//                   : "text-primary-foreground/90 hover:bg-primary-foreground/10"
//                   }`}
//               >
//                 Gallery & Images
//               </button>
//               {currentAdminRole === "main" && (
//                 <button
//                   onClick={() => {
//                     setActiveTab("admins")
//                     setIsMobileMenuOpen(false)
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === "admins"
//                     ? "bg-primary-foreground text-primary"
//                     : "text-primary-foreground/90 hover:bg-primary-foreground/10"
//                     }`}
//                 >
//                   Admin Management
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Registrations Tab */}
//         {activeTab === "registrations" && (
//           <>
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
//               <div className="bg-muted/30 p-6 rounded-lg">
//                 <p className="text-sm text-muted-foreground mb-1">Total Registrations</p>
//                 <p className="text-3xl font-bold">{stats.total}</p>
//               </div>
//               <div className="bg-green-500/10 border border-green-500 p-6 rounded-lg">
//                 <p className="text-sm text-green-700 mb-1">Paid</p>
//                 <p className="text-3xl font-bold text-green-700">{stats.paid}</p>
//               </div>
//               <div className="bg-blue-500/10 border border-blue-500 p-6 rounded-lg">
//                 <p className="text-sm text-blue-700 mb-1">Contacted</p>
//                 <p className="text-3xl font-bold text-blue-700">{stats.contacted}</p>
//               </div>
//               <div className="bg-yellow-500/10 border border-yellow-500 p-6 rounded-lg">
//                 <p className="text-sm text-yellow-700 mb-1">Pending</p>
//                 <p className="text-3xl font-bold text-yellow-700">{stats.pending}</p>
//               </div>
//               <div className="bg-red-500/10 border border-red-500 p-6 rounded-lg">
//                 <p className="text-sm text-red-700 mb-1">Rejected</p>
//                 <p className="text-3xl font-bold text-red-700">{stats.rejected}</p>
//               </div>
//             </div>

//             {/* Search and Filter */}
//             <div className="bg-muted/30 p-6 rounded-lg mb-8">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <input
//                     type="text"
//                     placeholder="Search by company, contact person, email, or product..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
//                   />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-5 h-5 text-muted-foreground" />
//                   <select
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                     className="px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="paid">Paid</option>
//                     <option value="contacted">Contacted</option>
//                     <option value="pending">Pending</option>
//                     <option value="rejected">Rejected</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Registrations List */}
//             <div className="space-y-4">
//               <h2 className="font-serif text-2xl mb-4">Exhibitor Registrations ({filteredRegistrations.length})</h2>

//               {filteredRegistrations.map((registration) => (
//                 <div
//                   key={registration.id}
//                   className={`border-2 rounded-lg p-6 transition-all duration-500 hover:shadow-lg ${getStatusColor(
//                     registration.status,
//                   )}`}
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                     {/* Registration Details */}
//                     <div className="flex-1 space-y-4">
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center gap-4">
//                           {registration.companyLogo && (
//                             <img
//                               src={registration.companyLogo || "/placeholder.svg"}
//                               alt={`${registration.companyName} logo`}
//                               className="w-16 h-16 object-contain rounded-md border-2 border-border"
//                             />
//                           )}
//                           <div>
//                             <h3 className="font-serif text-xl mb-1">{registration.companyName}</h3>
//                             <p className="text-sm text-muted-foreground">
//                               Registered on {new Date(registration.createdAt).toLocaleDateString()}
//                             </p>
//                             {registration.status === "paid" && (
//                               <p className="text-xs text-green-600 mt-1 font-medium">✓ Visible on public website</p>
//                             )}
//                           </div>
//                         </div>
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(registration.status)}`}
//                         >
//                           {registration.status.toUpperCase()}
//                         </span>
//                       </div>

//                       <div className="grid md:grid-cols-2 gap-4">
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Contact Person</p>
//                           <p className="font-medium">{registration.contactPerson}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Designation</p>
//                           <p className="font-medium">{registration.designation}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Email</p>
//                           <p className="font-medium">{registration.email}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Contact Number</p>
//                           <p className="font-medium">{registration.contactNumber}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Product/Service</p>
//                           <p className="font-medium">{registration.product}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Address</p>
//                           <p className="font-medium">{registration.address}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground mb-1">Company Logo</p>
//                           <p className="font-medium text-sm truncate">{registration.companyLogo || "Not uploaded"}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Status Actions */}
//                     <div className="lg:w-48">
//                       <p className="text-sm font-medium mb-3">Update Status</p>
//                       <div className="space-y-2">
//                         <button
//                           onClick={() => handleStatusChange(registration.id, "pending")}
//                           className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-500 text-sm font-medium"
//                         >
//                           Mark Pending
//                         </button>
//                         <button
//                           onClick={() => handleStatusChange(registration.id, "contacted")}
//                           className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-500 text-sm font-medium"
//                         >
//                           Mark Contacted
//                         </button>
//                         <button
//                           onClick={() => handleStatusChange(registration.id, "paid")}
//                           className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-500 text-sm font-medium"
//                         >
//                           Mark Paid
//                         </button>
//                         <button
//                           onClick={() => handleStatusChange(registration.id, "rejected")}
//                           className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-500 text-sm font-medium"
//                         >
//                           Mark Rejected
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {filteredRegistrations.length === 0 && (
//                 <div className="text-center py-12 text-muted-foreground">
//                   <p>No registrations found matching your criteria.</p>
//                 </div>
//               )}
//             </div>
//           </>
//         )}

//         {activeTab === "events" && (
//           <div>
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="font-serif text-3xl">Manage Events</h2>
//               <button
//                 onClick={() => {
//                   setEditingItem(null)
//                   setShowModal(true)
//                 }}
//                 className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add New Event
//               </button>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               {events.map((event) => (
//                 <div key={event.id} className="bg-muted/30 p-6 rounded-lg shadow-lg">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="font-serif text-2xl mb-2">{event.title}</h3>
//                       <p className="text-sm text-muted-foreground flex items-center gap-2">
//                         <MapPin className="w-4 h-4" />
//                         {event.location}
//                       </p>
//                     </div>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           setEditingItem(event)
//                           setShowModal(true)
//                         }}
//                         className="p-2 hover:bg-muted rounded-md transition-colors"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteEvent(event.id)}
//                         className="p-2 hover:bg-red-500/10 text-red-500 rounded-md transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="space-y-3 mb-4">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-primary" />
//                       <span className="text-sm">
//                         {new Date(event.startDate).toLocaleDateString()} -{" "}
//                         {new Date(event.endDate).toLocaleDateString()}
//                       </span>
//                     </div>
//                     <div className="text-sm text-muted-foreground">{event.time}</div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3 text-sm border-t pt-4">
//                     <div>
//                       <span className="text-muted-foreground">Exhibitors:</span>{" "}
//                       <span className="font-medium">{event.exhibitors}+</span>
//                     </div>
//                     <div>
//                       <span className="text-muted-foreground">Buyers:</span>{" "}
//                       <span className="font-medium">{event.buyers}+</span>
//                     </div>
//                     <div>
//                       <span className="text-muted-foreground">Countries:</span>{" "}
//                       <span className="font-medium">{event.countries}+</span>
//                     </div>
//                     <div>
//                       <span className="text-muted-foreground">Sectors:</span>{" "}
//                       <span className="font-medium">{event.sectors}</span>
//                     </div>
//                   </div>

//                   <p className="text-sm text-muted-foreground mt-4">{event.description}</p>

//                   <span
//                     className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${event.isPast ? "bg-gray-500 text-white" : "bg-green-500 text-white"
//                       }`}
//                   >
//                     {event.isPast ? "PAST EVENT" : "UPCOMING"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "categories" && (
//           <div>
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="font-serif text-3xl">Manage Categories</h2>
//               <button
//                 onClick={() => {
//                   setEditingItem(null)
//                   setShowModal(true)
//                 }}
//                 className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add New Category
//               </button>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {categories.map((category) => (
//                 <div key={category.id} className="bg-muted/30 p-6 rounded-lg shadow-lg">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="text-4xl">{category.icon}</div>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           setEditingItem(category)
//                           setShowModal(true)
//                         }}
//                         className="p-2 hover:bg-muted rounded-md transition-colors"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteCategory(category.id)}
//                         className="p-2 hover:bg-red-500/10 text-red-500 rounded-md transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <h3 className="font-serif text-xl mb-2">{category.name}</h3>
//                   <p className="text-sm text-muted-foreground">{category.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "gallery" && (
//           <div>
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h2 className="font-serif text-3xl">Manage Gallery</h2>
//                 <p className="text-sm text-muted-foreground mt-2">
//                   Manage all website images: carousels, banners, gallery, and exhibitor logos
//                 </p>
//               </div>
//               <button
//                 onClick={() => {
//                   setEditingItem(null)
//                   setShowModal(true)
//                 }}
//                 className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add New Image
//               </button>
//             </div>

//             <div className="mb-6 flex gap-2 flex-wrap">
//               <button
//                 onClick={() => setGalleryFilter("all")}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${galleryFilter === "all"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-foreground hover:bg-muted/80"
//                   }`}
//               >
//                 All Images ({gallery.length})
//               </button>
//               <button
//                 onClick={() => setGalleryFilter("carousel")}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${galleryFilter === "carousel"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-foreground hover:bg-muted/80"
//                   }`}
//               >
//                 Carousels ({gallery.filter((img) => img.type === "carousel").length})
//               </button>
//               <button
//                 onClick={() => setGalleryFilter("banner")}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${galleryFilter === "banner"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-foreground hover:bg-muted/80"
//                   }`}
//               >
//                 Banners ({gallery.filter((img) => img.type === "banner").length})
//               </button>
//               <button
//                 onClick={() => setGalleryFilter("gallery")}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${galleryFilter === "gallery"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-foreground hover:bg-muted/80"
//                   }`}
//               >
//                 Gallery ({gallery.filter((img) => img.type === "gallery").length})
//               </button>
//               <button
//                 onClick={() => setGalleryFilter("exhibitor")}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${galleryFilter === "exhibitor"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-muted text-foreground hover:bg-muted/80"
//                   }`}
//               >
//                 Exhibitor Logos ({gallery.filter((img) => img.type === "exhibitor").length})
//               </button>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {gallery
//                 .filter((image) => galleryFilter === "all" || image.type === galleryFilter)
//                 .map((image) => (
//                   <div key={image.id} className="bg-muted/30 rounded-lg shadow-lg overflow-hidden">
//                     <div className="aspect-square relative">
//                       <img
//                         src={image.imageUrl || "/placeholder.svg"}
//                         alt={image.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <span className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
//                         {image.type?.toUpperCase() || "GALLERY"}
//                       </span>
//                     </div>
//                     <div className="p-4">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="font-medium">{image.title}</h3>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => {
//                               setEditingItem(image)
//                               setShowModal(true)
//                             }}
//                             className="p-1 hover:bg-muted rounded-md transition-colors"
//                           >
//                             <Edit className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteGalleryImage(image.id)}
//                             className="p-1 hover:bg-red-500/10 text-red-500 rounded-md transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                       <p className="text-sm text-muted-foreground">{image.description}</p>
//                       {image.displayOrder && (
//                         <p className="text-xs text-muted-foreground mt-2">Order: {image.displayOrder}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             {gallery.filter((image) => galleryFilter === "all" || image.type === galleryFilter).length === 0 && (
//               <div className="text-center py-12 text-muted-foreground">
//                 <p>No images found for this category.</p>
//                 <button
//                   onClick={() => {
//                     setEditingItem(null)
//                     setShowModal(true)
//                   }}
//                   className="mt-4 text-primary hover:underline"
//                 >
//                   Add your first image
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === "admins" && currentAdminRole === "main" && (
//           <div>
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h2 className="font-serif text-3xl">Admin Management</h2>
//                 <p className="text-sm text-muted-foreground mt-2">Manage admin accounts and permissions</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setEditingItem(null)
//                   setShowModal(true)
//                 }}
//                 className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
//               >
//                 <Plus className="w-5 h-5" />
//                 Add New Admin
//               </button>
//             </div>

//             <div className="space-y-4">
//               {admins.map((admin) => (
//                 <div
//                   key={admin.id}
//                   className="bg-muted/30 border-2 border-border rounded-lg p-6 hover:shadow-lg transition-all duration-500"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-3">
//                         <h3 className="font-serif text-xl">{admin.username}</h3>
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${admin.role === "main" ? "bg-purple-500 text-white" : "bg-blue-500 text-white"
//                             }`}
//                         >
//                           {admin.role === "main" ? "MAIN ADMIN" : "REGULAR ADMIN"}
//                         </span>
//                       </div>

//                       <div className="grid md:grid-cols-3 gap-4 text-sm">
//                         <div>
//                           <p className="text-muted-foreground mb-1">Email</p>
//                           <p className="font-medium">{admin.email}</p>
//                         </div>
//                         <div>
//                           <p className="text-muted-foreground mb-1">Created</p>
//                           <p className="font-medium">{new Date(admin.createdAt).toLocaleDateString()}</p>
//                         </div>
//                         <div>
//                           <p className="text-muted-foreground mb-1">Last Login</p>
//                           <p className="font-medium">{admin.lastLogin}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Actions - Cannot edit/delete main admin */}
//                     {admin.role !== "main" && (
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => {
//                             setEditingItem(admin)
//                             setShowModal(true)
//                           }}
//                           className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-500 flex items-center gap-2"
//                         >
//                           <Edit className="w-4 h-4" />
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteAdmin(admin.id)}
//                           className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-500 flex items-center gap-2"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                     {admin.role === "main" && (
//                       <div className="text-sm text-muted-foreground italic">Main admin account cannot be modified</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-background">
//               <h3 className="font-serif text-2xl">
//                 {editingItem ? "Edit" : "Add New"}{" "}
//                 {activeTab === "events"
//                   ? "Event"
//                   : activeTab === "categories"
//                     ? "Category"
//                     : activeTab === "gallery"
//                       ? "Image"
//                       : activeTab === "admins"
//                         ? "Admin"
//                         : ""}
//               </h3>
//               <button
//                 onClick={() => {
//                   setShowModal(false)
//                   setEditingItem(null)
//                 }}
//                 className="p-2 hover:bg-muted rounded-md transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault()
//                 const formData = new FormData(e.currentTarget)
//                 const data = Object.fromEntries(formData.entries())

//                 if (activeTab === "events") {
//                   editingItem ? handleEditEvent(data) : handleAddEvent(data)
//                 } else if (activeTab === "categories") {
//                   editingItem ? handleEditCategory(data) : handleAddCategory(data)
//                 } else if (activeTab === "gallery") {
//                   editingItem ? handleEditGalleryImage(data) : handleAddGalleryImage(data)
//                 } else if (activeTab === "admins") {
//                   editingItem ? handleEditAdmin(data) : handleAddAdmin(data)
//                 }
//               }}
//               className="p-6 space-y-4"
//             >
//               {activeTab === "events" && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Event Title</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingItem?.title}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Location</label>
//                     <input
//                       type="text"
//                       name="location"
//                       defaultValue={editingItem?.location}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Start Date</label>
//                       <input
//                         type="date"
//                         name="startDate"
//                         defaultValue={editingItem?.startDate}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">End Date</label>
//                       <input
//                         type="date"
//                         name="endDate"
//                         defaultValue={editingItem?.endDate}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Time</label>
//                     <input
//                       type="text"
//                       name="time"
//                       defaultValue={editingItem?.time}
//                       placeholder="e.g., 10:00 AM - 7:00 PM"
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Exhibitors</label>
//                       <input
//                         type="number"
//                         name="exhibitors"
//                         defaultValue={editingItem?.exhibitors}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Buyers</label>
//                       <input
//                         type="number"
//                         name="buyers"
//                         defaultValue={editingItem?.buyers}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Countries</label>
//                       <input
//                         type="number"
//                         name="countries"
//                         defaultValue={editingItem?.countries}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Sectors</label>
//                       <input
//                         type="number"
//                         name="sectors"
//                         defaultValue={editingItem?.sectors}
//                         required
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Description</label>
//                     <textarea
//                       name="description"
//                       defaultValue={editingItem?.description}
//                       rows={3}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="flex items-center gap-2">
//                       <input type="checkbox" name="isPast" defaultChecked={editingItem?.isPast} className="w-4 h-4" />
//                       <span className="text-sm">Mark as Past Event</span>
//                     </label>
//                   </div>
//                 </>
//               )}

//               {activeTab === "categories" && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Category Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       defaultValue={editingItem?.name}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Icon (Emoji)</label>
//                     <input
//                       type="text"
//                       name="icon"
//                       defaultValue={editingItem?.icon}
//                       placeholder="e.g., 🔧"
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Description</label>
//                     <textarea
//                       name="description"
//                       defaultValue={editingItem?.description}
//                       rows={3}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
//                     />
//                   </div>
//                 </>
//               )}

//               {activeTab === "gallery" && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Image Title</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingItem?.title}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Image Type</label>
//                     <select
//                       name="type"
//                       defaultValue={editingItem?.type || "gallery"}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     >
//                       <option value="carousel">Carousel (Homepage)</option>
//                       <option value="banner">Banner (Hero Section)</option>
//                       <option value="gallery">Gallery (Gallery Page)</option>
//                       <option value="exhibitor">Exhibitor Logo</option>
//                     </select>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Choose where this image will be displayed on the website
//                     </p>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Image URL</label>
//                     <input
//                       type="text"
//                       name="imageUrl"
//                       defaultValue={editingItem?.imageUrl}
//                       placeholder="/path/to/image.jpg or https://..."
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Enter the image URL or upload to your server first
//                     </p>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Display Order</label>
//                     <input
//                       type="number"
//                       name="displayOrder"
//                       defaultValue={editingItem?.displayOrder || 1}
//                       min="1"
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     />
//                     <p className="text-xs text-muted-foreground mt-1">Lower numbers appear first (1, 2, 3...)</p>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">Description</label>
//                     <textarea
//                       name="description"
//                       defaultValue={editingItem?.description}
//                       rows={2}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
//                     />
//                   </div>
//                 </>
//               )}

//               {activeTab === "admins" && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       defaultValue={editingItem?.username}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       placeholder="Enter username"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       defaultValue={editingItem?.email}
//                       required
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                       placeholder="admin@example.com"
//                     />
//                   </div>
//                   {!editingItem && (
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Password</label>
//                       <input
//                         type="password"
//                         name="password"
//                         required
//                         minLength={6}
//                         className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                         placeholder="Minimum 6 characters"
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Role</label>
//                     <select
//                       name="role"
//                       defaultValue={editingItem?.role || "regular"}
//                       className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
//                     >
//                       <option value="regular">Regular Admin</option>
//                       <option value="main">Main Admin</option>
//                     </select>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Main admins can manage other admins. Regular admins can only manage content.
//                     </p>
//                   </div>
//                 </>
//               )}

//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowModal(false)
//                     setEditingItem(null)
//                   }}
//                   className="flex-1 px-6 py-3 rounded-md border border-border hover:bg-muted transition-all duration-500 font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
//                 >
//                   {editingItem ? "Update" : "Add"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

interface Registration {
  id: number
  companyName: string
  contactPerson: string
  designation: string
  email: string
  contactNumber: string
  product: string
  address: string
  companyLogo: string
  status: "pending" | "contacted" | "paid" | "rejected"
  createdAt: string
  type: "exhibitor" | "visitor"
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [exhibitors, setExhibitors] = useState<Registration[]>([])
  const [visitors, setVisitors] = useState<Registration[]>([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn")
    const adminUsername = localStorage.getItem("adminUsername")

    if (isLoggedIn === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }

    const fetchRegistrations = async () => {
      try {
        const [exhibitorRes, visitorRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/exhibitor-registrations/"),
          fetch("http://127.0.0.1:8000/api/visitor-registrations/"),
        ])

        const [exhibitorData, visitorData] = await Promise.all([
          exhibitorRes.json(),
          visitorRes.json(),
        ])

        setExhibitors(exhibitorData)
        setVisitors(visitorData)
      } catch (err) {
        console.error("Error fetching registrations:", err)
      }
    }

    fetchRegistrations()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn")
    localStorage.removeItem("adminUsername")
    router.push("/")
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-serif text-lg">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-primary-foreground text-primary px-4 py-2 rounded-md">
            <LogOut className="inline w-4 h-4 mr-1" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="font-serif text-2xl mb-6">Django Admin Registrations</h2>

        <section className="mb-10">
          <h3 className="text-xl font-medium mb-3">Exhibitor Registrations ({exhibitors.length})</h3>
          <ul className="space-y-2">
            {exhibitors.map((r) => (
              <li key={r.id} className="border p-3 rounded-md">
                <strong>{r.companyName}</strong> — {r.status} — {r.email}
              </li>
            ))}
          </ul>
          {exhibitors.length === 0 && <p className="text-muted-foreground">No exhibitor registrations found.</p>}
        </section>

        <section>
          <h3 className="text-xl font-medium mb-3">Visitor Registrations ({visitors.length})</h3>
          <ul className="space-y-2">
            {visitors.map((r) => (
              <li key={r.id} className="border p-3 rounded-md">
                <strong>{r.companyName}</strong> — {r.status} — {r.email}
              </li>
            ))}
          </ul>
          {visitors.length === 0 && <p className="text-muted-foreground">No visitor registrations found.</p>}
        </section>
      </main>
    </div>
  )
}