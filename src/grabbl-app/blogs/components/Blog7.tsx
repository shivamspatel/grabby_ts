"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";

import Card from "../components/Card";

export function Blog7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Explore Our Latest Insights
            </h1>
            <p className="md:text-md">
              Stay updated with Grabbl's news and tips.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <a href="blog-post" className="block size-full">
            <Card className="rb-12 mb-12 grid grid-cols-1 items-center md:mb-16 md:grid-cols-2">
              <img
                src="/blogposter.png"
                alt="Relume placeholder image"
                className="aspect-[8/6] size-full object-cover"
              />
              <div className="flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12">
                <div className="flex w-full flex-col items-start justify-start">
                  <p className="mb-2 text-sm font-semibold">Updates</p>
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    The Future of Alcohol Delivery
                  </h3>
                  <p>
                    Discover how Grabbl is revolutionizing alcohol delivery
                    services.
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src="/john_Doe.jpg"
                      alt="Relume placeholder avatar"
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">John Doe</h6>
                    <div className="flex items-center">
                      <p className="text-sm">11 Jan 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">5 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </a>
          <Tabs defaultValue="view-all" className="flex flex-col justify-start">
            <TabsList className="mb-12 ml-[-5vw] flex no-scrollbar w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              <TabsTrigger
                value="view-all"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                View all
              </TabsTrigger>
              <TabsTrigger
                value="category-one"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Industry Trends
              </TabsTrigger>
              <TabsTrigger
                value="category-two"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Safety Tips
              </TabsTrigger>
              <TabsTrigger
                value="category-three"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Product Reviews
              </TabsTrigger>
              <TabsTrigger
                value="category-four"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                User Stories
              </TabsTrigger>
              <TabsTrigger
                value="category-five"
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-neutral-black data-[state=inactive]:border-transparent"
              >
                Category Five
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="view-all"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/safe_deliver.png"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/janesmith.jpeg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/friends.png"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/alecbrown.jpg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/liquorstrore.jpeg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/emily.jpeg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/order.png"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/michael.jpg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/nightout.png"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/sarah.jpg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/brewery.jpg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="/chris.webp"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="/michael.jpg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-four"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-five"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How to Order Alcohol Safely
                      </h2>
                    </a>
                    <p>Learn the best practices for safe alcohol delivery.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Jane Smith</h6>
                        <div className="flex items-center">
                          <p className="text-sm">12 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Best Snacks for Your Night In
                      </h2>
                    </a>
                    <p>
                      Pair your drinks with the perfect snacks for a cozy
                      evening.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Alex Brown</h6>
                        <div className="flex items-center">
                          <p className="text-sm">13 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        How Grabbl Supports Local Businesses
                      </h2>
                    </a>
                    <p>
                      Find out how we empower local merchants through our
                      platform.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Emily White</h6>
                        <div className="flex items-center">
                          <p className="text-sm">14 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        The Rise of Convenience Apps
                      </h2>
                    </a>
                    <p>
                      Explore the growing trend of convenience apps in today's
                      market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Michael Green</h6>
                        <div className="flex items-center">
                          <p className="text-sm">15 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Tips for a Great Night Out
                      </h2>
                    </a>
                    <p>
                      Make the most of your night out with these helpful tips.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Sarah Johnson</h6>
                        <div className="flex items-center">
                          <p className="text-sm">16 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="mb-2 text-sm font-semibold">Updates</p>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Celebrating Local Breweries and Distilleries
                      </h2>
                    </a>
                    <p>
                      Join us in celebrating the craftsmanship of local
                      breweries and distilleries.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">Chris Black</h6>
                        <div className="flex items-center">
                          <p className="text-sm">17 Jan 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
