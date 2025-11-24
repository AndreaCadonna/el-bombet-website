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
  // COLOR PALETTE - Trentino Mountain Elegance
  // ==========================================================================
  /**
   * Elegant palette inspired by the Dolomites and Trentino Alps:
   * - Dolomite rose (Enrosadira sunset effect on mountain peaks)
   * - Deep alpine blue (crisp mountain sky)
   * - Warm stone gray (Alpine granite and limestone)
   * - Snow white (pristine mountain snow)
   * - Slate gray (mountain shadows and stone)
   */
  colors: {
    // Primary: Dolomite Rose (warm pink-beige from famous mountain stone)
    primary: '#C89B7B',

    // Secondary: Soft Alpine Stone (warm light gray)
    secondary: '#E8E3DD',

    // Accent: Deep Alpine Blue (mountain sky and lakes)
    accent: '#2B5F7C',

    // Muted: Mountain Mist (soft blue-gray)
    muted: '#D4DADD',

    // Background: Snow White (pristine, bright)
    background: '#FAFAF8',

    // Foreground: Slate Gray (deep mountain stone)
    foreground: '#2C3639',
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
