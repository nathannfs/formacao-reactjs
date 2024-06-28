import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		});
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/nathannfs.png' alt='' />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Nathan Santos</strong>

							<time title='11 de Maio às 08:00h' dateTime='2022-05-11 08:00:00'>
								Cerca de 1h atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
