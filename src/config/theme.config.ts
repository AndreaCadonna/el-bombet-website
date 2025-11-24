/**
 * Theme Configuration
 * ====================
 * Customize the visual appearance of your website.
 *
 * Options:
 * 1. Use a preset: Set `preset` to 'luxury', 'modern', 'rustic', 'coastal', or 'minimal'
 * 2. Customize: Set `preset` to 'custom' and modify colors, typography, and style
 * 3. Override preset: Use a preset but override specific values
 *
 * For detailed documentation, see: docs/configuration/theme.md
 */

import type { ThemeConfig } from './schema/theme';

const themeConfig: ThemeConfig = {
  // ==========================================================================
  // THEME PRESET
  // ==========================================================================
  /**
   * Available presets:
   * - 'luxury'   : Gold, cream, bronze
   * - 'modern'   : Blue, clean, minimal
   * - 'rustic'   : Warm amber, earthy tones
   * - 'coastal'  : Cyan, light, airy
   * - 'minimal'  : Black, white, neutral
   * - 'custom'   : Use your own colors below
   */
  preset: 'custom',

  // ==========================================================================
  // COLOR PALETTE - El Bombet Nature & Wood Theme
  // ==========================================================================
  /**
   * Custom color palette inspired by the historic 1700s building
   * and natural elements of Trento:
   * - Warm chestnut wood tones
   * - Deep forest green from Alpine nature
   * - Soft cream from historic stone walls
   * - Earthy sage and olive accents
   */
  colors: {
    // Primary: Warm chestnut wood (main brand color)
    primary: '#8B5A3C',

    // Secondary: Soft warm cream (historic stone walls)
    secondary: '#F5F1E8',

    // Accent: Deep forest green (Alpine nature, historic shutters)
    accent: '#2F5233',

    // Muted: Soft sage olive (nature-inspired neutrals)
    muted: '#E5E8DD',

    // Background: Warm ivory (light, welcoming)
    background: '#FFFBF5',

    // Foreground: Dark walnut brown (text, strong contrast)
    foreground: '#2C1810',
  },

  // ==========================================================================
  // TYPOGRAPHY - Elegant & Historic
  // ==========================================================================
  /**
   * Typography matching the historic charm of the 1700s building:
   * - Playfair Display for elegant, classic headings
   * - Inter for modern, readable body text
   */
  typography: {
    headingFont: 'Playfair Display',
    bodyFont: 'Inter Variable',
    baseFontSize: 16,
    lineHeight: 1.6,
  },

  // ==========================================================================
  // STYLE - Warm & Natural
  // ==========================================================================
  /**
   * Style settings to complement the natural wood and green palette
   */
  style: {
    borderRadius: 'small',
    shadowIntensity: 'medium',
    transitionSpeed: 'normal',
  },

  // ==========================================================================
  // DARK MODE (optional)
  // ==========================================================================
  /**
   * Override colors for dark mode
   * Only specify colors that should change in dark mode
   */
  // darkColors: {
  //   primary: '#dbc078',
  //   secondary: '#1a1a1a',
  //   background: '#0a0a0a',
  //   foreground: '#fafafa',
  //   muted: '#262626',
  // },
};

export default themeConfig;
