"use Client"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from 'next/image';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CarouselleForm() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover Our Animal Kingdom</h1>
          <p className="max-w-3xl text-center text-gray-500 dark:text-gray-400 md:text-xl lg:text-base/relaxed">
            Explore the diverse habitats and health status of our animal residents. Our admin panel allows you to easily
            update the information.
          </p>
        </div>
        <div className="mt-10 md:mt-12 lg:mt-14">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-1">
                    <Image
                      alt="Animal"
                      className="rounded-lg object-cover w-full aspect-square"
                      height={400}
                      src="/placeholder.svg"
                      width={400}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">African Elephant</h3>
                      <p className="text-gray-500 dark:text-gray-400">Loxodonta africana</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Habitat</h4>
                      <p className="text-gray-500 dark:text-gray-400">Savannas, grasslands, and forests of Africa</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Health Status</h4>
                      <p className="text-gray-500 dark:text-gray-400">Vulnerable</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-1">
                    <Image
                      alt="Animal"
                      className="rounded-lg object-cover w-full aspect-square"
                      height={400}
                      src="/placeholder.svg"
                      width={400}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Polar Bear</h3>
                      <p className="text-gray-500 dark:text-gray-400">Ursus maritimus</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Habitat</h4>
                      <p className="text-gray-500 dark:text-gray-400">Arctic sea ice and coastal areas</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Health Status</h4>
                      <p className="text-gray-500 dark:text-gray-400">Vulnerable</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-1">
                    <Image
                      alt="Animal"
                      className="rounded-lg object-cover w-full aspect-square"
                      height={400}
                      src="/placeholder.svg"
                      width={400}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Giant Panda</h3>
                      <p className="text-gray-500 dark:text-gray-400">Ailuropoda melanoleuca</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Habitat</h4>
                      <p className="text-gray-500 dark:text-gray-400">Bamboo forests of central China</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Health Status</h4>
                      <p className="text-gray-500 dark:text-gray-400">Vulnerable</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Admin Panel</h2>
            <p className="max-w-3xl text-center text-gray-500 dark:text-gray-400 md:text-xl lg:text-base/relaxed">
              Securely manage the animal information and media in our database.
            </p>
          </div>
          <div className="mt-10 md:mt-12 lg:mt-14">
            <Card>
              <CardHeader>
                <CardTitle>Animal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <Label htmlFor="animal-name">Animal Name</Label>
                      <Input defaultValue="African Elephant" id="animal-name" />
                    </div>
                    <div>
                      <Label htmlFor="animal-species">Animal Species</Label>
                      <Input defaultValue="Loxodonta africana" id="animal-species" />
                    </div>
                    <div>
                      <Label htmlFor="animal-habitat">Habitat</Label>
                      <Input defaultValue="Savannas, grasslands, and forests of Africa" id="animal-habitat" />
                    </div>
                    <div>
                      <Label htmlFor="animal-health">Health Status</Label>
                      <Input defaultValue="Vulnerable" id="animal-health" />
                    </div>
                    <div>
                      <Label htmlFor="animal-image">Animal Image</Label>
                    </div>
                    <div>
                      <Label htmlFor="habitat-image">Habitat Image</Label>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
