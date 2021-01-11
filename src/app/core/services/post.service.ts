import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IPost } from 'src/app/components/shared/models/post';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
    currentCategory: string;

    constructor(private afs: AngularFirestore) {}

    getAllPosts() {
        if (this.currentCategory) {
            return this.afs
                .collection<IPost>('posts', (ref) =>
                    ref.where('category', '==', this.currentCategory)
                )
                .snapshotChanges()
                .pipe(
                    map((actions) => {
                        return actions.map((item) => {
                            return {
                                ...item.payload.doc.data(),
                                id: item.payload.doc.id,
                            };
                        });
                    })
                );
        }

        return this.afs
            .collection<IPost>('posts', (ref) => ref.orderBy('createdOn'))
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((item) => {
                        return {
                            ...item.payload.doc.data(),
                            id: item.payload.doc.id,
                        };
                    });
                })
            );
    }

    getPostById(id: string) {
        return this.afs.collection<IPost>('posts').doc(id).valueChanges();
    }

    changeCategory(category: string) {
        this.currentCategory = category;
    }

    createPost(post: IPost) {
        return this.afs.collection('posts').add(post);
    }

    deletePost(id: string) {
        return this.afs.collection('posts').doc(id).delete();
    }
}
