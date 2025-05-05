/** @type {import('tailwindcss').Config} */
export default {
    // 1. Content configuration (now more flexible in v4)
    content: {
      files: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    },
  
    // 2. Theme configuration
    theme: {
      extend: {
        backgroundImage: {
          btn: `
            linear-gradient(to bottom right, 
            rgb(79 70 229), 
            rgb(124 58 237))
          `,
          'btn-hover': `
            linear-gradient(to bottom right, 
            rgb(129 140 248), 
            rgb(99 102 241))
          `,
        },
        
        // Custom shadow
        boxShadow: {
          glow: '0 4px 14px 0 rgba(99, 102, 241, 0.5)',
        },
      },
    },
  
    // 3. Styles configuration (new in v4)
    styles: {
      // Define your button component
      fancyBtn: ({ theme }) => ({
        '.fancy-btn': {
          position: 'relative',
          overflow: 'hidden',
          transitionProperty: 'all',
          transitionDuration: '300ms',
          boxShadow: theme('boxShadow.2xl'),
          borderRadius: theme('borderRadius.4xl'),
          backgroundImage: theme('backgroundImage.btn'),
  
          '&:hover': {
            boxShadow: theme('boxShadow.glow'),
          },
  
          '.fancy-btn-overlay': {
            position: 'absolute',
            inset: '0',
            opacity: '0',
            transitionProperty: 'opacity',
            transitionDuration: '300ms',
            backgroundImage: theme('backgroundImage.btn-hover'),
          },
  
          '&:hover .fancy-btn-overlay': {
            opacity: '1',
          },
  
          '.fancy-btn-shine': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(255 255 255 / 0.1)',
            transform: 'translateX(-100%)',
            transitionProperty: 'transform',
            transitionDuration: '700ms',
          },
  
          '&:hover .fancy-btn-shine': {
            transform: 'translateX(0)',
          },
  
          '.fancy-btn-text': {
            position: 'relative',
            zIndex: '10',
            fontWeight: theme('fontWeight.semibold'),
            color: theme('colors.white'),
          }
        }
      })
    }
  }