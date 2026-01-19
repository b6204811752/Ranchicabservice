import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Mail, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

export default function SocialShare({ 
  url = typeof window !== 'undefined' ? window.location.href : 'https://ranchicabservice.vercel.app',
  title = 'Ranchi Cab Service - Best Taxi Service in Ranchi',
  description = 'Book reliable & affordable cab services 24/7'
}: SocialShareProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url
        });
      } catch (err) {
        console.log('Share cancelled or failed:', err);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
          <Share2 className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Share with Friends
        </h3>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Help others discover the best cab service in Ranchi!
      </p>

      {/* Social Share Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`${link.color} text-white p-3 rounded-full shadow-md transition-all flex items-center justify-center`}
            aria-label={`Share on ${link.name}`}
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Copy Link Button */}
      <div className="relative">
        <motion.button
          onClick={copyToClipboard}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
        >
          <LinkIcon className="w-4 h-4" />
          Copy Link
        </motion.button>

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
          >
            Link copied!
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </motion.div>
        )}
      </div>

      {/* Native Share (Mobile) */}
      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share via...
        </motion.button>
      )}
    </div>
  );
}
