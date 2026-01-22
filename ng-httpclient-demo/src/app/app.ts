import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpclientService } from './httpclient';
import { Post } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  protected readonly title = signal('http-client-demo');

  posts = signal<Post[]>([]);
  searchTerm = signal('');

  filteredPosts = computed(() =>
    this.posts().filter(post =>
      post.title.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
      post.body.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  constructor(private httpClient: HttpclientService) {}

  ngOnInit() {
    this.httpClient.getPosts().subscribe({
      next: (data: Post[]) => {
        console.log('Posts loaded:', data);
        this.posts.set(data);
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }
}
