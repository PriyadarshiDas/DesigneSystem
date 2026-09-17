import type { ComponentType, SVGProps } from 'react';
import { cn } from '../utils/cn';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: string | number; strokeWidth?: string | number }>;
export type IconProps = SVGProps<SVGSVGElement> & { icon: IconComponent; size?: IconSize; label?: string };

export function Icon({ icon: Glyph, size = 'md', label, className, ...props }: IconProps) {
  return <Glyph className={cn('av-icon', `av-icon--${size}`, className)} aria-hidden={label ? undefined : true} aria-label={label} role={label ? 'img' : undefined} {...props} />;
}

export { Activity, ArrowRight, Bell, Bot, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleAlert, CircleX, Clock3, Code2, Coins, Command, Copy, Ellipsis, ExternalLink, Eye, GitBranch, Globe2, Heart, Info, Layers3, Link2, LoaderCircle, LockKeyhole, Menu, MessageCircle, Moon, Network, PanelLeft, Plus, Radio as RadioIcon, RefreshCw, Repeat2, Search, Send, Server, Settings2, Share2, ShieldCheck, Sparkles, Sun, Terminal, ThumbsUp, UserPlus, Users, WandSparkles, X, Zap } from 'lucide-react';
