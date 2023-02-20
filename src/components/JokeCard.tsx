import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

interface Props {
    image?: string
    joke: string
    copyToClipboard?: boolean
    maxWidth?: number
    minHeight?: number | string
    shareId?: string | undefined | null
}

const JokeCard = ({
    image,
    joke,
    copyToClipboard,
    maxWidth,
    minHeight,
    shareId,
}: Props) => {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(joke)
    }

    return (
        <Card sx={{ maxWidth, minHeight }}>
            {image && (
                <CardMedia
                    component="img"
                    sx={{ height: minHeight, objectFit: 'cover' }}
                    image={image}
                    title={joke}
                />
            )}
            <CardContent>
                {joke && (
                    <Typography
                        variant="h6"
                        component="h1"
                        color="text.secondary"
                        fontWeight={700}
                    >
                        <blockquote>{joke}</blockquote>
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                {copyToClipboard && (
                    <Button size="small" onClick={handleCopyToClipboard}>
                        Copy to Clipboard
                    </Button>
                )}
                {shareId && (
                    <Button
                        size="small"
                        color="primary"
                        href={`/details/${shareId}`}
                    >
                        Share
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default JokeCard
