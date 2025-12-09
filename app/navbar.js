'use client';

import { Menu, Button, IconButton, Box } from "@chakra-ui/react";
import { SegmentGroup, Segment } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useBreakpointValue } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";




export default function NavBar() {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const isNarrow = useBreakpointValue({ base: true, md: false });
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = pathname.length===1 
      ? "home" 
      : pathname.replace("/", "");

  function navClick(details) {
    console.log(details);
    console.log(pathname)
    if (details.value === "home") {
      router.push("/");
    } else {
      router.push("/" + details.value.toLowerCase());
    }
  }


function SegmentGroupContent({orientation="vertical"}) {
  return (
    <SegmentGroup.Root
      orientation={{orientation}}
      value={activeTab}
      onValueChange={navClick}
      bg="#505f58"
      boxShadow="none"
      justifyContent="end"
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          {label: "Home", value: "home"}, 
          {label: "About", value: "about"}, 
          {label: "FAQs", value: "faqs"}, 
          {label: "Contact", value: "contact"}
        ]}
        fontFamily="Frank Ruhl Libra"
        fontWeight="normal"
        fontSize="15px"
        color="gray.100"
        rounded="none"
        bg="#505f58"
        px={6}
        py={3}
        justifyContent="center"
        _hover={{
          color: "white",
          cursor: "grab",
          boxShadow: "none",
        }}
        _checked={{
          bg: "#55635d",
          textDecoration: "underline",
          boxShadow: "none",
          textUnderlineOffset: "4px",
          textDecorationThickness: "1px",
        }}
      />
    </SegmentGroup.Root>
  )
}

  if (isMobile) {
    return (
      <div className="sticky top-0 flex flex-row frankruhl justify-around bg-[#505f58] border-b-2 z-100">
        <span className="text-xl py-4 px-8">
          <nobr>
           Michelle Linscheid, LCSW
          </nobr>
        </span>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="ghost" size="sm" className="m-2">
              <RiMenuLine />
            </Button>
          </Menu.Trigger>
          <Menu.Content 
            // bg="gray.800" 
            // border="none" 
            // shadow="none"
            // width="100%" 
            position="absolute" 
            bottom="0px"
            // top="0px" left="0px" 
            // zIndex="1000"
            >
            {/* <Box 
              px={2}
              py={2}
              // width="100%"
              height="100%"
              position="absolute"
              top="0px"
              left="0px"
              bg="gray.800"
            > */}
              <SegmentGroupContent orientation="vertical" />
            {/* </Box> */}
          </Menu.Content>
        </Menu.Root>
      </div>
    );
  };

  if (isNarrow) {
    return (
      <div className="sticky top-0 flex flex-col frankruhl justify-around bg-[#505f58] border-b-2 z-100 pb-4">
      <SegmentGroupContent orientation="horizontal" />
      </div>
    );
  };

  return (
    <div className="sticky top-0 flex flex-row frankruhl justify-around bg-[#505f58] z-100">
      <span className="text-2xl py-4 px-8">
        <nobr>
          Michelle Linscheid Therapy
        </nobr>
      </span>

      <SegmentGroupContent orientation="horizontal" />
    </div>
  );
}


