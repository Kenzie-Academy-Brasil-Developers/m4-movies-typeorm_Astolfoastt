import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | null | undefined;

  @Column({ type: "int" })
  duration: number;

  @Column({ type: "int" })
  price: number;
}

export default Movie;
