import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Post } from '../posts/post.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(
    () => Post,
    post => post.user,
  )
  posts: Post[];
}
