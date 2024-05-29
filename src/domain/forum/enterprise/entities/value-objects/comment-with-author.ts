import { ValueObject } from '@/core/entities/value-object'

export interface CommentWithAuthorProps {
  comment: {
    id: string
    content: string
  }
  author: {
    id: string
    name: string
  }
  createdAt: Date
  updatedAt?: Date | null
}

export class CommentWithAuthor extends ValueObject<CommentWithAuthorProps> {
  get commentId() {
    return this.props.comment.id
  }

  get content() {
    return this.props.comment.content
  }

  get authorId() {
    return this.props.author.id
  }

  get authorName() {
    return this.props.author.name
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: CommentWithAuthorProps) {
    return new CommentWithAuthor(props)
  }
}
