"use client";
import {Navbar, Text} from "@nextui-org/react";

export const Header = () => {
	return (
		<Navbar isBordered variant='sticky'>
			<Navbar.Brand>
				<Text b color="inherit" hideIn="xs">
					TAKOYAKI.JS
				</Text>
			</Navbar.Brand>
		</Navbar>
	)
}
