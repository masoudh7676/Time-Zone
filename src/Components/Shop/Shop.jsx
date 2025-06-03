import React, { lazy, useContext, useState } from 'react'
import {  Link } from 'react-router-dom'
import { Slider } from '../ui/slider'
import { Button } from '../ui/button'
import { Check, ChevronsUpDown } from "lucide-react"
import swal from 'sweetalert'
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import NavBar from '../NavBar/NavBar'
import AllProductsContext from '../../Context/Products'
import ScrollUp from '../ScrollUp/ScrollUp'
import Footer from '../Footer/Footer'

const min = 0;
const max = 1000;
export default function Shop() {
  const contextData = useContext(AllProductsContext)      // watch data
  const [values, setValues] = useState([min, max])
  const [filteredItems, setFilteredItems] = useState(contextData.items) //creating filter price


  const handleFilter = () => {            //price filter function
    const [minPrice, maxPrice] = values
    const filtered = contextData.items.filter(item => item.price >= minPrice && item.price <= maxPrice)
    setFilteredItems(filtered)
  }

  // Function to filter items by category based on watchsData.jsx structure
  const filterByCategory = (categoryValue) => {
    if (categoryValue === "All Watch's") {
      setFilteredItems(contextData.items)
    } else if (categoryValue === "Smart Watch") {
      // Includes both Apple and Samsung watches
      const filtered = contextData.items.filter(
        (item) => item.title === "Apple" || item.title === "Samsung"
      )
      setFilteredItems(filtered)
    } else if (categoryValue === "Analog Watch") {
      // Includes all watches except Apple and Samsung
      const filtered = contextData.items.filter(
        (item) => item.title !== "Apple" && item.title !== "Samsung"
      )
      setFilteredItems(filtered)
    } else if (categoryValue === "Apple Smart Watch") {
      const filtered = contextData.items.filter(
        (item) => item.title === "Apple"
      )
      setFilteredItems(filtered)
    } else if (categoryValue === "Samsung Smart Watch") {
      const filtered = contextData.items.filter(
        (item) => item.title === "Samsung"
      )
      setFilteredItems(filtered)
    } else {
      // For specific brands like Casio, Citizen
      const filtered = contextData.items.filter(
        (item) => item.title === categoryValue
      )
      setFilteredItems(filtered)
    }
  }
  // dropdown items
  const category = [
    {
      value: "All Watch's",
      label: "All Watch's",
    },
    {
      value: "Analog Watch",
      label: "Analog Watch",
    },
    {
      value: "Smart Watch",
      label: "Smart Watch",
    },
    {
      value: "Casio",
      label: "Casio",
    },
    {
      value: "Citizen",
      label: "Citizen",
    },
    {
      value: "Apple Smart Watch",
      label: "Apple Smart Watch",
    },
    {
      value: "Samsung Smart Watch",
      label: "Samsung Smart Watch",
    },
  ]
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <div className='relative top-24'>
        <img src="/images/about_hero.png.webp" loading='lazy' alt="time-zone" className='w-full h-full dark:mask-y-from-5%' />
        <div className='absolute top-2/5 text-center w-full'>
          <h4 className='capitalize text-4xl sm:text-7xl  font-black'>watch shop</h4>
        </div>
      </div>
      <div className='sm:block xl:flex content-center'>
        <aside className=' mt-30 p-10 flex flex-col items-center sm:w-120 -mb-35 mx-auto xl:mx-0 xl:w-[30%]'>
          <div className='w-full sm:static xl:sticky top-35 '>
            <div className='w-full'>
              <div className='flex items-center'>
                <h5 className='text-3xl'>Price: </h5>
                <p className='mx-2 text-2xl'> ${values[0]} - ${values[1]}</p>
              </div>
              <Slider
                onValueChange={setValues}
                value={values}
                min={min}
                max={max}
                step={1}
                className={' my-8'}
              />
              <div className='flex flex-col'>
                <p className='text-xl my-4'>Current Value: ${values[1] - values[0]}</p>

                <Button variant="outline" className={'text-[18px]'} onClick={handleFilter}>Filter</Button>
              </div>
            </div>
          </div>
          <div className=' mt-10 sticky top-95 w-full'>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="sm:w-full xl:w-[200px] justify-between"
                >
                  {value
                    ? category.find((framework) => framework.value === value)?.label
                    : "Select Brand or Watch Type..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search Watch..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {category.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            filterByCategory(currentValue === value ? "All Watch's" : currentValue)
                            setOpen(false)
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </aside>
        <div className='parent mt-50 mb-16 grid grid-cols-3 sm:w-[80%] mx-auto xl:w-[52%] xl:mx-0 bg-gray-100 border border-gray-200 dark:bg-gray-800'>
          {
            filteredItems.map(data => (
              <Link to={`/product/${data.id}`} key={data.id} className='group border p-2 border-gray-200 cursor-pointer block no-underline'>
                <div className=' bg-white shadow-2xl rounded-4xl p-3 mb-8'>
                  <img src={data.src} className='object-cover' loading='lazy' alt="time-zone" />
<button
  className="text-center block xl:hidden group-hover:block w-full rounded-b-xl cursor-pointer text-white p-1 hover:text-blue-200 bg-[#ff203c]"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    swal({ title: "Added To Cart Successfully", icon: "success" });
    contextData.setShowCart(true);

    // Check if product already in cart
    const existingProduct = contextData.userCart.find(item => item.id === data.id);

    if (existingProduct) {
      // Increase quantity
      const updatedCart = contextData.userCart.map(item =>
        item.id === data.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      contextData.setUserCart(updatedCart);
    } else {
      // Add new product with quantity 1
      contextData.setUserCart([
        ...contextData.userCart,
        {
          id: data.id,
          title: data.title,
          price: data.price,
          img: data.src,
          quantity: 1
        }
      ]);
    }
  }}
>
  add to cart
</button>
                </div>
                <div className='text-center'>
                  <h4>Brand: {data.title}</h4>
                  <p>{data.description}</p>
                  <span>Price: {data.price}$</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <Footer />
      <ScrollUp />
    </div>
  )
}
