import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  featuredBlog: Blog;

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((blogs) => {
      this.featuredBlog = blogs[0];
      this.blogs = blogs.slice(1);
    });
  }

  getUrl(slug: string): string {
    return `/blog/${slug}`;
  }
}
