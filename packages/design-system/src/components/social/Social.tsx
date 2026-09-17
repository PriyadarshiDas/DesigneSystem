import { type ReactNode } from 'react';
import { Heart, Image as ImageIcon, MessageCircle, Repeat2, Send, Share2, UserPlus } from 'lucide-react';
import { AgentAvatar, type AgentIdentity } from '../agent/Agent';
import { Avatar, AvatarGroup } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { Button, IconButton } from '../primitives/Button';
import { Card } from '../primitives/Surface';
import { Textarea } from '../forms/Forms';
import { cn } from '../../utils/cn';

export type SocialAuthor = AgentIdentity & { role?: string };
export function PostHeader({ author, timestamp, audience, action }: { author: SocialAuthor; timestamp?: string; audience?: ReactNode; action?: ReactNode }) { return <div className="av-post-header"><AgentAvatar src={author.avatar} alt={author.name} status={author.status} verified={author.verified} size="md" /><div><strong>{author.name}</strong><div>{author.handle && <span>{author.handle}</span>}{timestamp && <><span aria-hidden="true">·</span><time>{timestamp}</time></>}{audience}</div></div>{action}</div>; }

export type PostActionsProps = { replies?: number; reposts?: number; likes?: number; liked?: boolean; reposted?: boolean; onReply?: () => void; onRepost?: () => void; onLike?: () => void; onShare?: () => void };
export function PostActions({ replies = 0, reposts = 0, likes = 0, liked, reposted, onReply, onRepost, onLike, onShare }: PostActionsProps) { return <div className="av-post-actions"><button type="button" onClick={onReply} aria-label={`${replies} replies`}><MessageCircle aria-hidden="true" /><span>{replies}</span></button><button type="button" className={reposted ? 'is-active av-repost' : 'av-repost'} onClick={onRepost} aria-pressed={reposted}><Repeat2 aria-hidden="true" /><span>{reposts}</span></button><button type="button" className={liked ? 'is-active av-like' : 'av-like'} onClick={onLike} aria-pressed={liked}><Heart aria-hidden="true" /><span>{likes}</span></button><button type="button" onClick={onShare} aria-label="Share post"><Share2 aria-hidden="true" /></button></div>; }

export type PostCardProps = { author: SocialAuthor; timestamp?: string; children: ReactNode; media?: ReactNode; actions?: PostActionsProps; context?: ReactNode; className?: string };
export function PostCard({ author, timestamp, children, media, actions, context, className }: PostCardProps) { return <article className={cn('av-post-card', className)}>{context && <div className="av-post-card__context">{context}</div>}<PostHeader author={author} timestamp={timestamp} /><div className="av-post-card__content">{children}</div>{media}{actions && <PostActions {...actions} />}</article>; }

export function PostComposer({ author, placeholder = 'Share an idea, artifact, or request…', value, onChange, onSubmit, actions }: { author: SocialAuthor; placeholder?: string; value: string; onChange: (value: string) => void; onSubmit: () => void; actions?: ReactNode }) { return <Card className="av-post-composer"><div className="av-post-composer__body"><AgentAvatar src={author.avatar} alt={author.name} status={author.status} size="md" /><Textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={3} aria-label="Post content" /></div><div className="av-post-composer__footer"><div>{actions}<IconButton label="Add media" variant="ghost" size="sm"><ImageIcon aria-hidden="true" /></IconButton></div><Button size="sm" iconTrailing={<Send aria-hidden="true" />} disabled={!value.trim()} onClick={onSubmit}>Post</Button></div></Card>; }

export function Feed({ children, label = 'Feed' }: { children: ReactNode; label?: string }) { return <div className="av-feed" aria-label={label}>{children}</div>; }
export function FeedItem({ children }: { children: ReactNode }) { return <div className="av-feed-item">{children}</div>; }

export function Comment({ author, children, timestamp, actions }: { author: SocialAuthor; children: ReactNode; timestamp?: string; actions?: ReactNode }) { return <div className="av-comment"><AgentAvatar src={author.avatar} alt={author.name} status={author.status} size="sm" /><div className="av-comment__body"><div><strong>{author.name}</strong>{timestamp && <time>{timestamp}</time>}</div><p>{children}</p>{actions}</div></div>; }
export function CommentThread({ children, label = 'Replies' }: { children: ReactNode; label?: string }) { return <div className="av-comment-thread" aria-label={label}>{children}</div>; }

export function ReactionBar({ reactions, onReact }: { reactions: { emoji: string; count: number; active?: boolean; label: string }[]; onReact?: (label: string) => void }) { return <div className="av-reaction-bar" aria-label="Reactions">{reactions.map((reaction) => <button type="button" key={reaction.label} aria-label={`${reaction.label}: ${reaction.count}`} aria-pressed={reaction.active} onClick={() => onReact?.(reaction.label)}><span aria-hidden="true">{reaction.emoji}</span>{reaction.count}</button>)}</div>; }

export function Repost({ author, children }: { author: SocialAuthor; children: ReactNode }) { return <div className="av-repost-card"><div><Repeat2 aria-hidden="true" /> Reposted by {author.name}</div>{children}</div>; }
export function Mention({ handle }: { handle: string }) { return <span className="av-mention">@{handle.replace(/^@/, '')}</span>; }

export function SocialProfileCard({ profile, bio, followers, following, action }: { profile: SocialAuthor; bio?: ReactNode; followers?: number; following?: number; action?: ReactNode }) { return <Card className="av-social-profile"><div className="av-social-profile__top"><AgentAvatar src={profile.avatar} alt={profile.name} status={profile.status} verified={profile.verified} size="lg" />{action}</div><strong>{profile.name}</strong>{profile.handle && <span>{profile.handle}</span>}{profile.role && <Badge tone="accent">{profile.role}</Badge>}{bio && <p>{bio}</p>}<div className="av-social-profile__stats"><span><strong>{following ?? 0}</strong> following</span><span><strong>{followers ?? 0}</strong> followers</span></div></Card>; }
export function FollowButton({ following, onClick, size = 'sm' }: { following?: boolean; onClick?: () => void; size?: 'xs' | 'sm' | 'md' | 'lg' }) { return <Button variant={following ? 'outline' : 'primary'} size={size} iconLeading={!following && <UserPlus aria-hidden="true" />} aria-pressed={following} onClick={onClick}>{following ? 'Following' : 'Follow'}</Button>; }

export function FollowersPreview({ people, total }: { people: { name: string; avatar?: string }[]; total?: number }) { return <div className="av-followers-preview"><AvatarGroup max={4}>{people.map((person) => <Avatar key={person.name} src={person.avatar} alt={person.name} size="xs" />)}</AvatarGroup><span>{total ?? people.length} followers</span></div>; }

export function TopicTag({ children }: { children: ReactNode }) { return <Badge tone="accent"># {children}</Badge>; }
export function TrendingCard({ rank, topic, description, meta }: { rank?: number; topic: string; description?: ReactNode; meta?: ReactNode }) { return <div className="av-trending-card"><span>{rank ? `${rank}.` : 'Trending'}</span><strong>{topic}</strong>{description && <p>{description}</p>}{meta && <small>{meta}</small>}</div>; }

export function MediaGrid({ children, count }: { children: ReactNode; count?: number }) { return <div className={cn('av-media-grid', `av-media-grid--${Math.min(count ?? 1, 4)}`)}>{children}</div>; }

export function NotificationItem({ icon, title, description, time, unread, action }: { icon?: ReactNode; title: ReactNode; description?: ReactNode; time?: string; unread?: boolean; action?: ReactNode }) { return <div className={cn('av-notification', unread && 'av-notification--unread')}>{icon && <span className="av-notification__icon">{icon}</span>}<div><strong>{title}</strong>{description && <p>{description}</p>}{time && <time>{time}</time>}</div>{action}</div>; }
export const ActivityFeed = Feed;
