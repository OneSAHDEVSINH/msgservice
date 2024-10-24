'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  MessageOutlined,
  RocketOutlined,
  TeamOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Customizable Templates`,
      description: `Create professional, on-brand messages in minutes with our diverse range of customizable templates.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Seamless WhatsApp Integration`,
      description: `Effortlessly send personalized messages at scale with our WhatsApp Business API integration.`,
      icon: <MessageOutlined />,
    },
    {
      heading: `Boost Engagement`,
      description: `Increase customer interaction and response rates with timely, relevant communications.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Team Collaboration`,
      description: `Streamline your messaging workflow with multi-user access and role-based permissions.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Analytics Dashboard`,
      description: `Track message performance and customer engagement with our intuitive analytics tools.`,
      icon: <BarChartOutlined />,
    },
    {
      heading: `Compliance Assurance`,
      description: `Stay compliant with WhatsApp's policies through our pre-approved template system.`,
      icon: <SafetyCertificateOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Marketing Manager, TechCorp`,
      content: `WhatsApp Business Template Service revolutionized our customer outreach. We've seen a 40% increase in engagement since implementing it!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `E-commerce Owner`,
      content: `As a small business owner, this service has been a game-changer. It's like having a professional marketing team at my fingertips.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Customer Service Lead, RetailGiant`,
      content: `Our response times have improved dramatically. Customers love the quick, personalized communication we can now provide.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Patel`,
      designation: `CEO, StartupInnovate`,
      content: `This service has helped us scale our customer communication effortlessly. It's been crucial to our rapid growth.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Thompson`,
      designation: `Digital Strategist, AgencyX`,
      content: `The compliance features alone are worth it. We no longer worry about violating WhatsApp's policies.`,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      name: `Robert Kim`,
      designation: `Operations Manager, LogisticsPro`,
      content: `The time we've saved on creating and sending messages has allowed us to focus on what really matters - our customers.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small businesses just getting started with WhatsApp messaging`,
      monthly: 29,
      yearly: 290,
      features: [
        `100 messages/day`,
        `5 customizable templates`,
        `Basic analytics`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing businesses with increased messaging needs`,
      monthly: 99,
      yearly: 990,
      features: [
        `1000 messages/day`,
        `20 customizable templates`,
        `Advanced analytics`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large-scale businesses with high-volume messaging`,
      monthly: 299,
      yearly: 2990,
      features: [
        `Unlimited messages`,
        `Unlimited templates`,
        `Custom integrations`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the WhatsApp Business Template Service work?`,
      answer: `Our service provides a user-friendly platform where you can select from a range of pre-approved templates, customize them to fit your brand, and send them to your customers via WhatsApp. We handle the integration with WhatsApp Business API, ensuring your messages are compliant and delivered efficiently.`,
    },
    {
      question: `Is this service compliant with WhatsApp's policies?`,
      answer: `Absolutely! All our templates are pre-approved and comply with WhatsApp's business policies. Our system is designed to keep you within the guidelines, so you can focus on communicating with your customers without worrying about policy violations.`,
    },
    {
      question: `Can I integrate this with my existing CRM or business tools?`,
      answer: `Yes, our Professional and Enterprise plans offer integration capabilities with popular CRM systems and business tools. For custom integrations, please contact our sales team to discuss your specific needs.`,
    },
    {
      question: `What kind of support do you offer?`,
      answer: `We offer email support for all plans, with priority support for Professional plans and above. Enterprise customers benefit from a dedicated account manager for personalized assistance.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Choose Your Template`,
      description: `Browse our library of pre-approved templates or create your own custom design.`,
    },
    {
      heading: `Personalize Your Message`,
      description: `Tailor the content to fit your brand and specific customer needs.`,
    },
    {
      heading: `Select Your Audience`,
      description: `Choose individual customers or segment your audience for targeted messaging.`,
    },
    {
      heading: `Send and Track`,
      description: `Hit send and monitor engagement through our intuitive analytics dashboard.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Struggling with ineffective customer communication`,
    },
    {
      emoji: `🕒`,
      title: `Wasting hours crafting individual messages`,
    },
    {
      emoji: `😱`,
      title: `Worrying about WhatsApp policy compliance`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Revolutionize Your Customer Communication with WhatsApp`}
        subtitle={`Engage your audience like never before with personalized, compliant WhatsApp messages at scale.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/sREzvx-messagingservice-GDC8`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy businesses`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`Are You Struggling with WhatsApp Business Communication?`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Effortless WhatsApp Messaging in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock the Power of WhatsApp for Your Business`}
        subtitle={`Our comprehensive suite of features is designed to streamline your communication, boost engagement, and drive results.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How Businesses Are Thriving with Our Service`}
        subtitle={`Don't just take our word for it. See how companies like yours are transforming their customer communication.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose the Perfect Plan for Your Business`}
        subtitle={`From startups to enterprises, we have a solution that fits your needs and budget.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Find quick answers to common queries about our WhatsApp Business Template Service.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Customer Communication?`}
        subtitle={`Join thousands of businesses already leveraging the power of WhatsApp with our template service.`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
