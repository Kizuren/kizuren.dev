export default defineAppConfig({
  ui: {
    colors: {
      pixelgreen: 'pixel-green',
    },
    input: {
      compoundVariants: [
        {
          color: 'pixelgreen',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset ring-pixelgreen focus-visible:ring-pixelgreen',
        },
      ],
      variants: {
        variant: {
          outline: 'text-highlighted bg-black ring ring-inset ring-accented',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
          ghost:
            'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent',
        },
      },
      defaultVariants: {
        size: 'md',
        color: 'pixelgreen',
        variant: 'outline',
      },
    },
    textarea: {
      compoundVariants: [
        {
          color: 'pixelgreen',
          variant: ['outline', 'subtle'],
          class:
            'focus-visible:ring-2 focus-visible:ring-inset ring-pixelgreen focus-visible:ring-pixelgreen',
        },
      ],
      variants: {
        variant: {
          outline: 'text-highlighted bg-black ring ring-inset ring-accented',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
          ghost:
            'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent',
        },
      },
      defaultVariants: {
        size: 'md',
        color: 'pixelgreen',
        variant: 'outline',
      },
    },
    toast: {
      slots: {
        root: 'relative group overflow-hidden bg-black shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5 focus:outline-none',
      },
      variants: {
        color: {
          pixelgreen: {
            root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pixelgreen',
            icon: 'text-pixelgreen',
            progress: 'bg-pixelgreen',
          },
        },
      },
      defaultVariants: {
        color: 'pixelgreen',
      },
    },
  },
});
