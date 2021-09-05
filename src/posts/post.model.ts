import {
  Table,
  Column,
  DataType,
  Model,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId:number;
  image:string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;
  @Column({ type: DataType.STRING })
  image: string;
  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER })
  userId: number;
  @BelongsTo(() => User)
  author: User;
}