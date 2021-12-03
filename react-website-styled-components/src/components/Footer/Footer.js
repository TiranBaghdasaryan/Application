import React from "react";
import {Button} from "../../globalStyles";

import {
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from "react-icons/fa";

import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	FooterLink,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLinksContainer,
	FooterLinksWrapper,
	SocialIcon,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>Follow our news</FooterSubHeading>
				<FooterSubText>The news will be send on your email</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of service</FooterLink>
					</FooterLinkItems>
					<FooterLinkItems>
						<FooterLinkTitle>Contact Us</FooterLinkTitle>
						<FooterLink to="/sign-up"> How it works</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of service</FooterLink>
					</FooterLinkItems>
				</FooterLinksWrapper>

				<FooterLinksWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>Help Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of service</FooterLink>
					</FooterLinkItems>
					<FooterLinkItems>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Investors</FooterLink>
						<FooterLink to="/">Term of service</FooterLink>
					</FooterLinkItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						.Net
					</SocialLogo>
					<WebsiteRights>.Net © 2021</WebsiteRights>

					<SocialIcons>
						<SocialIconLink href="/" target="_blank" area-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" area-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href="/"
							target="_blank"
							area-label="Youtube"
							rel="noopener noreferrer"
						>
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" area-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" area-label="Linkedin">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
