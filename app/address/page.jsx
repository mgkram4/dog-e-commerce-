"use client";

import React, { useEffect, useState } from "react";
import TextInput from "../Components/TextInput";
import MainLayout from "../layouts/MainLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useUser } from "../context/user";
import useIsLoading from "../hooks/useIsLoading";
import useUserAddress from "../hooks/useUserAddress";
import { toast } from "react-toastify";
import useCreateAddress from "../hooks/useCreateAddress";
import ClientOnly from "../Components/ClientOnly";

export default function Address() {
  const router = useRouter();
  const { user } = useUser();

  const [addressId, setAddressId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [error, setError] = useState({});

  const showError = (type) => {
    if (Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return "";
  };

  const getAddress = async () => {
    if (user?.id == null || user?.id == undefined) {
      useIsLoading(false); // Note: I'm not sure if you intended to use `useIsLoading` as a function here
      return;
    }
    const response = await useUserAddress(); // Assuming `useUserAddress` is a function
    if (response) {
      setTheCurrentAddress(response); // Assuming `setTheCurrentAddress` is a valid function
      useIsLoading(false); // Note: I'm not sure if you intended to use `useIsLoading` as a function here
      return;
    }
    useIsLoading(false); // Note: I'm not sure if you intended to use `useIsLoading` as a function here
  };

  useEffect(() => {
    useIsLoading(true); // Note: I'm not sure if you intended to use `useIsLoading` as a function here
    getAddress();
  }, [user]);

  const setTheCurrentAddress = (result) => {
    setAddressId(result.id);
    setName(result.name);
    setAddress(result.address);
    setZipcode(result.zipcode);
    setCity(result.city);
    setCountry(result.country);
  };

  const validate = () => {
    setError({});
    let isError = false;
    if (!name) {
      setError({ type: "name", message: "A name is required" });
      isError = true;
    } else if (!address) {
      setError({ type: "address", message: "An address is required" });
      isError = true;
    } else if (!zipcode) {
      setError({ type: "zipcode", message: "A zipcode is required" });
      isError = true;
    } else if (!city) {
      setError({ type: "city", message: "A city is required" });
      isError = true;
    } else if (!country) {
      setError({ type: "country", message: "A country is required" });
      isError = true;
    }

    return isError;
  };

  const submit = async (event) => {
    event.preventDefault();
    let isError = validate();

    if (isError) {
      toast.error(error.message, { autoClose: 3000 });
      return;
    }

    try {
      setIsUpdatingAddress(true);

      const response = await useCreateAddress({
        addressId,
        name,
        address,
        zipcode,
        city,
        country,
      });

      setTheCurrentAddress(response);
      setIsUpdatingAddress(false);

      toast.success("Address updated!", { autoClose: 3000 });

      router.push("/checkout");
    } catch (error) {
      setIsUpdatingAddress(false);
      console.log(error);
      alert(error);
    }
  };

  return (
    <MainLayout>
      <div className="mt-4 max-w-[600px] mx-auto px-2" id="AddressPage">
        <div className="mx-auto bg-white rounded-lg p-3">
          <div className="text-xl font-bold mb-2">Address Details</div>
          <form onSubmit={submit} className="mb-4">
            <div className="mb-4">
              <ClientOnly>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <TextInput
                  id="name"
                  className="w-full"
                  placeholder="Enter your name"
                  string={name}
                  error={showError("name")}
                  onUpdate={setName}
                />
              </ClientOnly>
            </div>
            <div className="mb-4">
              <ClientOnly>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <TextInput
                  id="address"
                  className="w-full"
                  placeholder="Enter your address"
                  string={address}
                  error={showError("address")}
                  onUpdate={setAddress}
                />
              </ClientOnly>
            </div>
            <div className="mb-4">
              <ClientOnly>
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Zipcode
                </label>
                <TextInput
                  id="zipcode"
                  className="w-full"
                  placeholder="Enter your zipcode"
                  string={zipcode}
                  error={showError("zipcode")}
                  onUpdate={setZipcode}
                />
              </ClientOnly>
            </div>
            <div className="mb-4">
              <ClientOnly>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <TextInput
                  id="city"
                  className="w-full"
                  placeholder="Enter your city"
                  string={city}
                  error={showError("City")}
                  onUpdate={setCity}
                />
              </ClientOnly>
            </div>
            <div className="mb-4">
              <ClientOnly>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country
                </label>
                <TextInput
                  id="country"
                  className="w-full"
                  placeholder="Enter your country"
                  string={country}
                  error={showError("Country")}
                  onUpdate={setCountry}
                />
              </ClientOnly>
            </div>
            <button
              type="submit"
              disabled={isUpdatingAddress}
              className={`mt-6 w-full text-white text-lg font-semibold p-3 rounded ${
                isUpdatingAddress ? "bg-blue-800" : "bg-blue-600"
              }`}
            >
              {!isUpdatingAddress ? (
                <div>Update Address</div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  Please wait...
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
