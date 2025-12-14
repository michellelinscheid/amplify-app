"use client";

import { Providers } from "@/components/ui/providers";
import { Toaster, toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

import {
  Box,
  Button,
  Field,
  Input,
  Textarea,
  VStack,
  HStack,
  Heading
} from "@chakra-ui/react";

export default function ContactForm() {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toaster.create({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
        closable: true,
        type: "success",
        duration: 5000,
      })

      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err)
      toaster.create({
        title: "Error",
        description: "Something went wrong. Please reach out to me directly at MichelleLTherapy@gmail.com, or try again later.",
        closable: true,
        type: "error",
        duration: 60000,
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isMobile) {
    return (
      <Providers>
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="11/12"
        mx="0"
        p={8}
        bg="#505f58"
        rounded="xl"
        shadow="none"
      >
        <VStack spacing={4} align="stretch">
          <VStack spacing={4} align="stretch">
            <Field.Root>
              <Field.Label 
                color="gray.200"
              >
                First Name
              </Field.Label>
              <Input
                name="firstName"
                placeholder="Required"
                value={formData.firstName}
                onChange={handleChange}
                bg="#505f58"
                style={{ border: "solid 2px white" }}
                _focus={{ bg: "#748c81" }}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label color="gray.200">Last Name</Field.Label>
              <Input
                name="lastName"
                placeholder="Required"
                value={formData.lastName}
                onChange={handleChange}
                bg="#505f58"
                style={{ border: "solid 2px white" }}
                border="none"
                _focus={{ bg: "#748c81" }}
              />
            </Field.Root>
          </VStack>

          <Field.Root>
            <Field.Label color="gray.200">Email</Field.Label>
            <Input
              type="email"
              name="email"
              placeholder="Required"
              value={formData.email}
              onChange={handleChange}
              bg="#505f58"
              style={{ border: "solid 2px white" }}
              border="none"
              _focus={{ bg: "#748c81" }}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label color="gray.200">Message</Field.Label>
            <Textarea
              name="message"
              placeholder="Required"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              bg="#505f58"
              style={{ border: "solid 2px white" }}
              border="none"
              _focus={{ bg: "#748c81" }}
            />
          </Field.Root>

          <Button
            type="submit"
            color="white"
            bg="transparent"
            isLoading={isSubmitting}
            alignSelf="center"
            w="50%"
          >
            SEND
          </Button>
        </VStack>
      </Box>
      <Toaster />
      </Providers>
    );
  }

  return (
    <Providers>
    <Box
      as="form"
      onSubmit={handleSubmit}
      w="11/12"
      mx="0"
      p={8}
      bg="#505f58"
      rounded="xl"
      shadow="none"
    >
      <VStack spacing={4} align="stretch">
        <HStack spacing={4} align="stretch">
          <Field.Root>
            <Field.Label 
              color="gray.200"
            >
              First Name
            </Field.Label>
            <Input
              name="firstName"
              placeholder="Required"
              value={formData.firstName}
              onChange={handleChange}
              bg="#505f58"
              style={{ border: "solid 2px white" }}
              _focus={{ bg: "#748c81" }}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label color="gray.200">Last Name</Field.Label>
            <Input
              name="lastName"
              placeholder="Required"
              value={formData.lastName}
              onChange={handleChange}
              bg="#505f58"
              style={{ border: "solid 2px white" }}
              border="none"
              _focus={{ bg: "#748c81" }}
            />
          </Field.Root>
        </HStack>

        <Field.Root>
          <Field.Label color="gray.200">Email</Field.Label>
          <Input
            type="email"
            name="email"
            placeholder="Required"
            value={formData.email}
            onChange={handleChange}
            bg="#505f58"
            style={{ border: "solid 2px white" }}
            border="none"
            _focus={{ bg: "#748c81" }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label color="gray.200">Message</Field.Label>
          <Textarea
            name="message"
            placeholder="Required"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            bg="#505f58"
            style={{ border: "solid 2px white" }}
            border="none"
            _focus={{ bg: "#748c81" }}
          />
        </Field.Root>

        <Button
          type="submit"
          color="white"
          bg="transparent"
          isLoading={isSubmitting}
          alignSelf="center"
          w="50%"
        >
          SEND
        </Button>
      </VStack>
    </Box>
    <Toaster />
    </Providers>
  );
}

